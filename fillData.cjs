const fs = require("fs");
const path = require("path");

const campaignsDir = path.join(__dirname, "src", "content", "campaigns");
if (!fs.existsSync(campaignsDir)) {
    console.error("Directory not found:", campaignsDir);
    process.exit(1);
}

const posterUrls = [
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1500&auto=format&fit=crop"
];

const horizontalUrls = [
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?q=80&w=2500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507924538820-ede94a04019d?q=80&w=2500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=2500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=2500&auto=format&fit=crop"
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const basename = path.basename(filePath, ".md");
    
    const lines = content.split('\n');
    let inFrontmatter = false;
    let newContent = [];
    let inGallery = false;
    let hasHorizontal = false;

    const mockTitle = basename.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim() === "---") {
            inFrontmatter = !inFrontmatter;
            if (!inFrontmatter && !hasHorizontal) {
                newContent.push(`horizontalImage: "${getRandom(horizontalUrls)}"`);
            }
            newContent.push(line);
            continue;
        }
        
        if (inFrontmatter) {
            if (line.startsWith("title:")) {
                newContent.push(`title: "${mockTitle}"`);
            } else if (line.startsWith("posterImage:")) {
                newContent.push(`posterImage: "${getRandom(posterUrls)}"`);
            } else if (line.startsWith("horizontalImage:")) {
                newContent.push(`horizontalImage: "${getRandom(horizontalUrls)}"`);
                hasHorizontal = true;
            } else if (line.startsWith("galleryImages:")) {
                inGallery = true;
                newContent.push("galleryImages:");
                newContent.push(`  - "${getRandom(horizontalUrls)}"`);
                newContent.push(`  - "${getRandom(horizontalUrls)}"`);
                newContent.push(`  - "${getRandom(horizontalUrls)}"`);
                newContent.push(`  - "${getRandom(horizontalUrls)}"`);
            } else if (inGallery && line.trim().startsWith("- ")) {
                // skip
            } else {
                inGallery = false;
                newContent.push(line);
            }
        } else {
            newContent.push(line);
        }
    }
    
    fs.writeFileSync(filePath, newContent.join('\n'), "utf-8");
}

const files = fs.readdirSync(campaignsDir).filter(f => f.endsWith('.md'));
files.forEach(file => {
    processFile(path.join(campaignsDir, file));
});

console.log("Populated " + files.length + " campaigns with 4K Unsplash Mock Images!");

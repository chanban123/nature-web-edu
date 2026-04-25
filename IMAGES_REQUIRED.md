## Nature Wave Music Academy - Images Required

### Images to Download from Website

Below are all the images used from the naturewavemusic.com website. Download these and place them in the `images/` folder:

#### Teacher Images (Now using local images):
1. John Lewis (Vocal): `images/john-lewis.jpg`
2. Kathy Davis (Vocal): `images/kathy-davis.jpg`
3. David Cox (Guitar): `images/david-cox.jpg`

**Download from:**
- https://naturewavemusic.com/wp-content/uploads/2024/07/94VHKRA.jpeg → Save as `images/john-lewis.jpg`
- https://naturewavemusic.com/wp-content/uploads/2024/07/G9CBPRU.jpeg → Save as `images/kathy-davis.jpg`
- https://naturewavemusic.com/wp-content/uploads/2024/07/Z8VAR3H.jpeg → Save as `images/david-cox.jpg`

#### Other Images Needed (Placeholders):

**For Home/Index Page:**
- hero-bg.jpg - Full width hero image (a student learning/playing music)
- preschool.jpg - Preschool program image
- schooler.jpg - School-age students learning music
- teenager.jpg - Teenager with instrument
- facility-bg.jpg - Music studio/facility background

**For About Us Page:**
- ceo.jpg - Photo of Ratan Mohanty (CEO)

**For Logo:**
- logo.png - Green music academy logo (32x32 or 40x40)

### How to Add Images:

1. **Download images:** Download the teacher images from the URLs above
2. **Create placeholders:** For hero, programs, and facility images, you can:
   - Use free stock images from Unsplash, Pexels, or Pixabay
   - Use music/instrument related images
   - Contact the academy for official images

3. **Save locations:**
   - All images go in: `d:\Nature Wave\Site\images\`

### Alternative: Using Placeholder Service

If you want temporary placeholder images, you can use:
- Placeholder URLs: https://via.placeholder.com/800x600
- But replace with real images when available

### Current Image References:

The teacher images are referenced directly from the website (external URLs).
All other images reference local files in the `images/` folder.

### File Structure:
```
d:\Nature Wave\Site\
├── index.html
├── about-us.html
├── contact-us.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── logo.png
    ├── hero-bg.jpg
    ├── preschool.jpg
    ├── schooler.jpg
    ├── teenager.jpg
    ├── facility-bg.jpg
    ├── ceo.jpg
    ├── john-lewis.jpg
    ├── kathy-davis.jpg
    └── david-cox.jpg
```

### Downloading Images Programmatically:

If you want to download the teacher images programmatically, you can use:

```powershell
# In PowerShell - Download teacher images from the website
$images = @(
    "https://naturewavemusic.com/wp-content/uploads/2024/07/94VHKRA.jpeg",
    "https://naturewavemusic.com/wp-content/uploads/2024/07/G9CBPRU.jpeg",
    "https://naturewavemusic.com/wp-content/uploads/2024/07/Z8VAR3H.jpeg"
)

$names = @("john-lewis.jpg", "kathy-davis.jpg", "david-cox.jpg")

# Create images folder if it doesn't exist
if (!(Test-Path "images")) {
    New-Item -ItemType Directory -Name "images" | Out-Null
}

# Download each image
for ($i = 0; $i -lt $images.Count; $i++) {
    Write-Host "Downloading $($names[$i])..."
    Invoke-WebRequest -Uri $images[$i] -OutFile "images/$($names[$i])"
}

Write-Host "All images downloaded successfully!"
```

Run this script from the `d:\Nature Wave\Site\` directory to automatically download all teacher images.

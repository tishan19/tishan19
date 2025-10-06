# README-deploy.md

## Image optimization (ImageMagick)
# Resize hero to 1400px wide, strip metadata, progressive jpeg
magick hero-original.jpg -strip -resize 1400x -interlace Plane -quality 82 images/hero.jpg

# Profile 800x800 center crop
magick profile-original.jpg -strip -resize 900x900^ -gravity center -extent 800x800 -quality 88 images/profile.jpg

# Thumbnails
magick hero-original.jpg -strip -resize 600x400 -quality 78 images/thumb1.jpg
magick hero-original.jpg -strip -resize 600x400 -quality 78 images/thumb2.jpg
magick hero-original.jpg -strip -resize 600x400 -quality 78 images/thumb3.jpg

# WebP option (better compression)
magick hero-original.jpg -strip -resize 1400x -quality 80 images/hero.webp

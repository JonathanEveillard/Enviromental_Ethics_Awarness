#!/usr/bin/env python3
"""
Script to check and fix JPEG image color spaces.
Converts CMYK JPEGs to RGB for browser compatibility.
"""

from PIL import Image
import os
import sys

gallery_path = r"c:\Users\teamh\Desktop\DSKT\webeth\public\images\gallery"

def fix_image(image_path):
    """Check and fix image color space if needed."""
    try:
        img = Image.open(image_path)
        print(f"✓ {os.path.basename(image_path)}: Mode={img.mode}, Size={img.size}")
        
        # If image is CMYK, convert to RGB
        if img.mode == 'CMYK':
            print(f"  Converting CMYK -> RGB...")
            rgb_img = img.convert('RGB')
            rgb_img.save(image_path, 'JPEG', quality=95)
            print(f"  ✓ Saved as RGB JPEG")
            return True
        elif img.mode != 'RGB':
            print(f"  Converting {img.mode} -> RGB...")
            rgb_img = img.convert('RGB')
            rgb_img.save(image_path, 'JPEG', quality=95)
            print(f"  ✓ Saved as RGB JPEG")
            return True
        else:
            print(f"  Already RGB")
            return False
            
    except Exception as e:
        print(f"✗ Error processing {os.path.basename(image_path)}: {e}")
        return None

def main():
    print(f"Checking images in: {gallery_path}")
    print(f"Total images: {len([f for f in os.listdir(gallery_path) if f.endswith('.jpg')])}\n")
    
    # Get all JPEG files
    jpeg_files = sorted([f for f in os.listdir(gallery_path) if f.lower().endswith(('.jpg', '.jpeg'))])
    
    if not jpeg_files:
        print("No JPEG files found!")
        return
    
    converted = 0
    for filename in jpeg_files:
        image_path = os.path.join(gallery_path, filename)
        result = fix_image(image_path)
        if result:
            converted += 1
    
    print(f"\n✓ Done! Converted {converted} images.")

if __name__ == '__main__':
    # First check if PIL is installed
    try:
        from PIL import Image
    except ImportError:
        print("PIL/Pillow not installed. Installing...")
        os.system("pip install Pillow")
    
    main()

#!/usr/bin/env sh

# brew update && brew install imagemagick
command=$1

optimizeImage() {
    image=$1
    quality=$2
    width=$3
    postfix=$4 # postfix in the image name [-0]: "*-0.jpg"
    echo "Optimize [${image}] quality [${quality}] width [${width}]"
    if [ "${width}" == 0 ]; then
        magick "${image}" -format jpeg -sampling-factor 4:2:0 -strip -quality "${quality}" -interlace JPEG -colorspace sRGB "${image}"
    else
        optimizedImage="${image/${postfix}.jpg/-${width}.jpg}"
        magick "${image}" -format jpeg -sampling-factor 4:2:0 -strip -quality "${quality}" -interlace JPEG -colorspace sRGB -resize "${width}"x "${optimizedImage}"
    fi
}

# ./optimize-images.sh artworks /shadows-of-unforgotten-ancestors
if [ "${command}" == "artworks" ]; then
    project=$2 #optional
    dir="src/assets/images/artwork${project}"
    # cleanup
    echo "Cleanup directory from autogenerated images [${dir}]"
    find "${dir}" -name "*-400.jpg" -delete
    find "${dir}" -name "*-1500.jpg" -delete
    # optimize
    images=($(find -L "${dir}" -name "*-0.jpg"))
    for image in "${images[@]}"; do
        echo "Optimize: ${image}"
        optimizeImage "${image}" 80 400 "-0"
        optimizeImage "${image}" 80 1500 "-0"
    done
fi

# ./optimize-images.sh one publication/land-escape-art-review/LandEscape_Art_Review_1.jpg
if [ "${command}" == "one" ]; then
    optimizeImage "src/assets/images/${2}" 80 0
fi

# ./optimize-images.sh all publication
if [ "${command}" == "all" ]; then
    dir="src/assets/images/${2}"
    images=($(find -L "${dir}" -name "*.jpg"))
    for image in "${images[@]}"; do
        optimizeImage "${image}" 80 0
    done
fi

#./optimize-images.sh one-width project/personal-exhibition-fragile/fragile-main.jpg 500
#./optimize-images.sh one-width project/shadows-of-unforgotten-ancestors/shadows-of-unforgotten-ancestors-main.jpg 500
#./optimize-images.sh one-width project/black-and-white/black-and-white-main.jpg 500
#./optimize-images.sh one-width project/feeling-and-living/feeling-and-living-main.jpg 500
#./optimize-images.sh one-width project/jazzman/jazzman-main.jpg 500
if [ "${command}" == "one-width" ]; then
    image="src/assets/images/${2}"
    width=$3
    optimizeImage "${image}" 100 "${width}" ""
fi

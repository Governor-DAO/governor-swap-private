npm install
npm uninstall governor-common
npm install github:Governor-DAO/governor-common-private
RANDDIR="temp_build_$(openssl rand -hex 12)"
BUILD_PATH=$RANDDIR npm run build
if [ -f "$RANDDIR/index.html" ]; then
    rm -rf build
    mv $RANDDIR build
else 
    echo "Deploy failed!"
fi

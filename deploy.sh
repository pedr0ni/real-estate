# Delete build directory
rm -rf build

# Build application
yarn build

# Deploy to Firebase
firebase deploy

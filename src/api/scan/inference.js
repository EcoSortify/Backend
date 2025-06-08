const tfjs = require('@tensorflow/tfjs-node');

function loadModel() {
    const modelFile = tfjs.io.fileSystem('ml_model/model.json'); // for local
    // const modelUrl = 'https://storage.googleapis.com/ecosortify-assets/classifier-model/model.json'; // for online
    return tfjs.loadGraphModel(modelFile);
}

function predict(model, imageBuffer) {
    const tensor = tfjs.node.decodeJpeg(imageBuffer, 3); // 3 channels (RGB)
    const resized = tfjs.image.resizeBilinear(tensor, [299, 299]);
    const normalized = resized.div(255.0);
    const batched = normalized.expandDims(0); // [1, 299, 299, 3]

    return model.predict(batched);
}

module.exports = { loadModel, predict };
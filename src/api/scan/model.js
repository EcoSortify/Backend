let model = null;

function setModel(loadedModel) {
  model = loadedModel;
}

function getModel() {
  return model;
}

module.exports = { setModel, getModel };
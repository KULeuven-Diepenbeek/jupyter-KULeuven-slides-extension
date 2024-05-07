import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyter-KULeuven-slides-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter-KULeuven-slides-extension:slides',
  description: 'A quick way to enter slide titles for the jupyter_KULeuven Reveal.js slides',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter-KULeuven-slides-extension is activated!');
  }
};

export default plugin;

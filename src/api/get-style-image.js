import axios from 'axios';

const baseUrl = `https://datalab-tf-img-styletrans.herokuapp.com`;

export function getStyleImage(checkpoint, file) {

  // If needed you can add your own parameters here
  var url = `${baseUrl}`;

  console.log(`Making request to: ${url}`);

  return axios({
        method: 'post',
        url: url,
        data: {
          checkpoint: checkpoint,
          file: file
        }
    }).catch(function(err) {
      if (axios.isCancel(err)) {
          console.error(err.message, err);
      } else {
          throw err;
      }
  });
}

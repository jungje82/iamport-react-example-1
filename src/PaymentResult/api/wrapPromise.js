function wrapPromise(promise) {
    let status = "pending";
    let response;
  
    const suspender = promise.then(
      (res) => {
        console.log('suspender',res);
        status = "success";
        response = res;
      },
      (err) => {
        console.log('suspender',err);
        status = "error";
        response = err;
      }
    );
  
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
    return { read };
  }
  
  export default wrapPromise;
const HOST = process.env.API_HOST!;

const myHeaders = new Headers();
myHeaders.append('Authorization', `Bearer ${process.env.API_TOKEN!}`);

const requestOptions: RequestInit = {
  method: 'GET',
  headers: myHeaders,
};

export { HOST, requestOptions };

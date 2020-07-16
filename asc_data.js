const server = 'http://api.haxors.or.id';

export default {
  asyncData ({ params, error }) {
    return axios.get(server)
      .then((res) => {
        return { title: res.data.title }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}

server.run();

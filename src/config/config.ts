const config = {
  API_URL: (window as any)._env_
    ? <string>(window as any)._env_.API_URL
    : "http://localhost:8000/",
};

export default config;

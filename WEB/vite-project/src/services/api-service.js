import axios from "axios";

const service = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.REAC_APP_BASE_API_URL || "http://127.0.0.1:3000/v1",
});

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      localStorage.removeItem("user");
      window.location.assign("/login");
    } else {
      return Promise.reject(error);
    }
  }
);

export function login(data) {
  return service.post("/login", data);
}

export function createUser(body) {
  return service.post("/register", body);
}

export function logoutApi() {
  return service.post("/logout");
}

export function getPlaylists() {
  return service.get("/playlists");
}

export function getPlaylistItems(id) {
  return service.get(`/playlists/${id}`);
}

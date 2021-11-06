import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../../api/client";
import storage from "../../../utils/storage";

export const login = (credentials, isChecked) => {
  return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
    if (isChecked) {
      storage.set("auth", accessToken);
    }
    setAuthorizationHeader(accessToken);
  });
};

export const logout = () =>
  Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });

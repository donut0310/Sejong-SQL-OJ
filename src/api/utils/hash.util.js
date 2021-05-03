import * as crypto from "crypto";

export class HashUtil {
  constructor() {}

  /**
   * value 파라미터로 전달된 값의 해쉬값 return
   * @param value - hash화 할 값
   * @param saltValue - 만약 특정 salt값으로 해야할 경우 salt값 전달. 없을 경우, 랜덤값으로 설정
   */

  static getHashedValue(value, saltValue) {
    let salt = saltValue ?? crypto.randomBytes(16).toString("base64");
    let hashedValue = crypto
      .createHmac("sha512", salt)
      .update(value)
      .digest("base64");

    return hashedValue;
  }
}

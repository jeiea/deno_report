class _AsymmetricKeyObject {
  get asymmetricKeyType() {
    return "rsa";
  }

  get asymmetricKeyDetails() {
    switch (this.asymmetricKeyType) {
      case "rsa":
      case "rsa-pss":
        return 1;
      default:
        return 2;
    }
  }
}


export const handleSpambots = (emailString) => {
  const idxArroba = emailString.indexOf("@")
  const idxDot = emailString.indexOf(".")
  if (idxArroba === -1 || idxDot === -1) {
    console.error("Email no válido")
    return emailString
  }
  return emailString.substring(0, idxArroba) + "&#64;" + emailString.substring(idxArroba + 1, idxDot) + "&#46;" + emailString.substring(idxDot + 1)
}

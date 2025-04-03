function scheduleAppointment() {
  const phoneNumber = "5583994194692";
  const message =
    "Olá, Ivanilda! Gostaria de agendar um horário para fazer minhas unhas!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
}

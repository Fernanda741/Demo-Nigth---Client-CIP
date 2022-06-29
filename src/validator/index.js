export function validarCpf(cpf) {
  let newCpf = cpf.replace(/[^\d]+/g, "");
  if (newCpf.length !== 11 || !!newCpf.match(/(\d)\1{10}/)) {
    return false;
  }
  newCpf = newCpf.split("").map((item) => +item);
  const rest = (count) =>
    ((newCpf
      .slice(0, count - 12)
      .reduce((soma, item, index) => soma + item * (count - index), 0) *
      10) %
      11) %
    10;
  return rest(10) === newCpf[9] && rest(11) === newCpf[10];
}

export const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const maskCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const maskPhone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
};

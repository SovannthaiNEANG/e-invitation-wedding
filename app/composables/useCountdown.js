import { ref } from "vue";

export function useCountdown(date) {
  const days = ref(0);
  const hours = ref(0);

  function update() {
    const diff = new Date(date) - new Date();

    days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  }

  setInterval(update, 1000);

  update();

  return { days, hours };
}

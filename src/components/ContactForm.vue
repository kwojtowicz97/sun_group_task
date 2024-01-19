<script setup lang="ts">
import CarSelect from '@/components/CarSelect.vue'
import TextInput from './TextInput.vue'
import CheckBox from './CheckBox.vue'
import MainButton from './MainButton.vue'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')

const errors = ref<Record<string, string>>({})

const submitHandler = (e: Event) => {
  e.preventDefault()
  errors.value = {}
  if (!name.value) {
    errors.value.name = 'To pole jest wymagane'
  }
  if (!email.value) {
    errors.value.email = 'To pole jest wymagane'
  }
  if (!phone.value) {
    errors.value.phone = 'To pole jest wymagane'
  }

  if (Object.keys(errors.value).length === 0) {
    alert('Formularz wysłany')
  } else {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="max-w-[670px] mx-auto pt-[110px] pb-14 xl:pb-[104px] xl:px-0 px-4">
    <p class="font-light text-center leadming-[26px]">Jazda próbna</p>
    <h1 class="text-[30px] xl:text-[36px] leading-[46px] text-center font-light mt-2">
      Umów się na bezpłatną <br />
      jazdę próbną
    </h1>
    <form id="form" @submit="submitHandler" class="flex flex-col mt-16 items-start">
      <CarSelect />
      <TextInput :error="errors.name" v-model="name" class-name="mt-5" placeholder="Imię *" />
      <TextInput class-name="mt-5" placeholder="Nazwisko (opcjonalnie)" />
      <TextInput
        :error="errors.email"
        v-model="email"
        class-name="mt-5"
        placeholder="Adres e-mail *"
      />
      <TextInput
        :error="errors.phone"
        v-model="phone"
        class-name="mt-5"
        placeholder="Nr. telefonu *"
      />
      <p class="text-[13px] font-light leading-[21px] mt-5">* Pole wymagane</p>
      <p class="text-[13px] font-light leading-[21px] mt-12">
        Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w celu przedstawienia
        informacji handlowej w wybrany przez Ciebie sposób w związku
        <span class="underline">Czytaj więcej</span><br />
        <br />
        Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości przedstawiania Ci atrakcyjnych
        ofert / promocji produktów, akcesoriów i usług marki CUPRA w przyszłości.
      </p>
      <CheckBox
        id="agree"
        name="agree"
        class-name="mt-6"
        label="Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa w celu przedstawienia mi informacji marketingowych i handlowych dotyczących produktów i usług marki CUPRA oraz innych powiązanych z marką CUPRA akcesoriów, produktów i usług motoryzacyjnych za pomocą:"
      />
      <CheckBox class-name="mt-6" label="Email" id="email" name="agree" />
      <CheckBox class-name="mt-6" label="Telefon" id="phone" name="agree" />
      <CheckBox class-name="mt-6" label="Wiadomość SMS/MMS" id="sms" name="agree" />
      <p class="text-[13px] font-light leading-[21px] mt-6">
        Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych oraz
        do wycofania w każdym momencie swojej zgody. <br />
        Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego celu.
        <br />
        Administratorem Twoich danych jest Plichta spółka z ograniczoną odpowiedzialnością Spółka
        Komandytowa, z siedzibą w Wejherowie przy ulicy Gdańskiej 13c. Zapraszamy do zapoznania się
        z naszą polityką prywatności umieszczoną pod linkiem:
        <span class="underline">https://www.plichta.com.pl/polityka-prywatnosci</span>
      </p>
      <MainButton class-name="mt-12 mx-auto" variant="black">Umów jazdę próbną</MainButton>
    </form>
  </div>
  <div class="h-[17px] bg-white border-b border-[#D5D5D5]"></div>
</template>

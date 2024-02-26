<template>
    <main class="main">
        <div class="form">

            <span class="form__toogle" @click.stop="toogleForm">{{ toogleName }}</span>

            <h2 class="form__name">{{ title }}</h2>

            <form @submit.prevent class="form-body" action="">
                <div class="form-body__login">
                    <input class="form-body__input" type="text" placeholder="Логин" v-model="loginValue">
                    <div class="form-body__errors">{{ loginError }}</div>
                </div>
                <div class="form-body__password">
                    <input class="form-body__input" type="password" placeholder="Пароль" v-model="passwordValue">
                    <div class="form-body__errors">{{ passwordError }}</div>
                </div>

                <div class="form-body__consent" v-show="!isAuthToogle">
                    <input class="form-body__checkbox" type="checkbox" v-model="checkValue">
                    <label class="form-body__label" for="checkbox">
                        Я согласен получать обновления на почту
                    </label>
                </div>

                <span class="form-body__errorUsers">{{ isErrorUsersInfo }}</span>
                <!-- v-show="isErrorUsers" -->
                <ButtonGo :title="buttonName" buttonAdd @click.stop="clickForm" />
            </form>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonGo from '@/components/ui/ButtonGoOut.vue'

export default {
  name: 'AuthPage',
  components: {
    ButtonGo
  },
  props: {
  },
  setup () {
    const router = useRouter()

    const title = ref('вход')
    const toogleName = ref('Зарегистрироваться')
    const buttonName = ref('Войти')
    const isAuthToogle = ref(true)

    const isErrorUsersInfo = ref('')

    const loginValue = ref('')
    const passwordValue = ref('')
    const checkValue = ref(false)

    const loginError = ref('')
    const passwordError = ref('')

    const toogleForm = () => {
      loginError.value = ''
      passwordError.value = ''

      if (isAuthToogle.value) {
        title.value = 'Регистрация'
        toogleName.value = 'Авторизоваться'
        buttonName.value = 'Зарегистрироваться'
      } else {
        title.value = 'вход'
        toogleName.value = 'Зарегистрироваться'
        buttonName.value = 'Войти'
      }
      isAuthToogle.value = !isAuthToogle.value
    }
    const clickForm = () => {
      // выполняем валидацию,
      isAuthToogle.value ? authorization() : registration()
    }
    // если ок
    //     localStorage.setItem('isAuth', JSON.stringify(true))
    //     router.push('/')

    const authorization = () => {
      loginError.value = ''
      passwordError.value = ''

      if (loginValue.value.trim().length === 0) {
        loginError.value = 'Поле не должно быть пустым'
      }
      if (passwordValue.value.trim().length === 0) {
        passwordError.value = 'Поле не должно быть пустым'
      }
      if (loginError.value.trim().length === 0 && passwordError.value.trim().length === 0) {
        const users = JSON.parse(localStorage.getItem('users'))

        const user = users.find(item => {
          return item.login === loginValue.value
        })

        if (!user) {
          // isErrorUsers.value = true
          isErrorUsersInfo.value = 'Логин или пароль неверен'
        } else {
          if (user?.password === passwordValue.value) {
            // localStorage.isAuth = JSON.stringify(true)
            localStorage.setItem('isAuth', JSON.stringify(true))
            router.push('/')
          } else {
            // isErrorUsers.value = true
            isErrorUsersInfo.value = 'Логин или пароль неверен'
          }
        }
      }
    }

    const registration = () => {
      loginError.value = ''
      passwordError.value = ''

      if (loginValue.value.trim().length === 0) {
        loginError.value = 'Поле не должно быть пустым'
      } else if (loginValue.value.trim().length < 4) {
        loginError.value = 'Логин должен содержать не менее 4-х символов'
      }

      if (passwordValue.value.trim().length === 0) {
        passwordError.value = 'Поле не должно быть пустым'
      } else if (passwordValue.value.trim().length < 4) {
        passwordError.value = 'Пароль должен содержать не менее 4-х символов'
      }

      if (loginError.value.trim().length === 0 && passwordError.value.trim().length === 0) {
        const users = JSON.parse(localStorage.getItem('users'))

        const isCheckAuth = users.some(item => {
          return item.login === loginValue.value
        })

        if (!isCheckAuth) {
          users.push({
            login: loginValue.value,
            password: passwordValue.value
          })
          isErrorUsersInfo.value = ''

          localStorage.users = JSON.stringify(users)
        } else {
          isErrorUsersInfo.value = 'Логин уже занят'
        }
      }
    }
    return {
      title,
      toogleName,
      buttonName,
      loginValue,
      passwordValue,
      isAuthToogle,
      isErrorUsersInfo,
      checkValue,
      loginError,
      passwordError,
      toogleForm,
      clickForm
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
    height: 100vh;
    background-image: url(../assets/images/bgAuth.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form {
    // width: 460px;
    // height: 340px;
    display: flex;
    flex-direction: column;
    // position: relative;
    // width: 500px;
    // border: 3px solid orange;
    background-color: #fff;
    padding: 9px 20px 20px 34px;

    &__toogle {
        font-size: 11px;
        font-family: Montserrat;
        font-weight: 300;
        cursor: pointer;
        width: max-content;
        margin-left: auto;
        margin-bottom: 15px;
        color: #D58C51;
    }

    &__name {
        font-size: 31px;
        font-family: Montserrat;
        font-weight: 700;
        margin: auto;
        margin-bottom: 36px;
    }
}

.form-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__login {
        margin-bottom: 8px;
    }

    &__password {
        margin-bottom: 8px;
    }

    &__input {
        border: 1px solid #D58C51;
        border-radius: 61px;
        font-size: 16px;
        position: relative;
        color: #161516;
        font-family: Montserrat;
        font-weight: 400;
        margin-bottom: 2px;

        // &:focus {
        //     outline: none;
        // }
    }

    &__errors {
        font-size: 8px;
        color: #FF0B0B;
        font-family: Montserrat;
        font-weight: 300;
        position: absolute;
        // bottom: -8px;
        // left: 8px;
    }

    &__errorUsers {
        font-size: 8px;
        color: #FF0B0B;
        font-family: Montserrat;
        font-weight: 300;
    }

    &__consent {
        display: flex;
        align-items: center;
        // position: absolute;
        margin-bottom: 28px;
    }

    &__checkbox {
        border: 1px solid #D58C51;
    }

    &__label {
        font-size: 11px;
        color: #301411;
        font-family: Montserrat;
        font-weight: 300;
    }
}

:deep(.buttonAdd) {
    margin-left: 0px;

    &:hover {
        background-color: #D58C51;
        color: #161516;
    }
}
</style>

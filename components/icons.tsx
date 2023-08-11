import {
  Bell,
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  loader: Loader2,
  bell: Bell,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  cart: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 1H2.636C3.146 1 3.591 1.343 3.723 1.835L4.106 3.272M4.106 3.272C9.67664 3.11589 15.2419 3.73515 20.642 5.112C19.818 7.566 18.839 9.95 17.718 12.25H6.5M4.106 3.272L6.5 12.25M6.5 12.25C5.70435 12.25 4.94129 12.5661 4.37868 13.1287C3.81607 13.6913 3.5 14.4544 3.5 15.25H19.25M5 18.25C5 18.4489 4.92098 18.6397 4.78033 18.7803C4.63968 18.921 4.44891 19 4.25 19C4.05109 19 3.86032 18.921 3.71967 18.7803C3.57902 18.6397 3.5 18.4489 3.5 18.25C3.5 18.0511 3.57902 17.8603 3.71967 17.7197C3.86032 17.579 4.05109 17.5 4.25 17.5C4.44891 17.5 4.63968 17.579 4.78033 17.7197C4.92098 17.8603 5 18.0511 5 18.25ZM17.75 18.25C17.75 18.4489 17.671 18.6397 17.5303 18.7803C17.3897 18.921 17.1989 19 17 19C16.8011 19 16.6103 18.921 16.4697 18.7803C16.329 18.6397 16.25 18.4489 16.25 18.25C16.25 18.0511 16.329 17.8603 16.4697 17.7197C16.6103 17.579 16.8011 17.5 17 17.5C17.1989 17.5 17.3897 17.579 17.5303 17.7197C17.671 17.8603 17.75 18.0511 17.75 18.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  cheveronLeft: (props: LucideProps) => (
    <svg
      {...props}
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1L1 9L8.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  plus: (props: LucideProps) => (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 9H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  minus: (props: LucideProps) => (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dashboard: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 2.75C9.5 1.50781 8.49219 0.5 7.25 0.5H2.75C1.50781 0.5 0.5 1.50781 0.5 2.75V7.25C0.5 8.49219 1.50781 9.5 2.75 9.5H7.25C8.49219 9.5 9.5 8.49219 9.5 7.25V2.75ZM9.5 14.75C9.5 13.5078 8.49219 12.5 7.25 12.5H2.75C1.50781 12.5 0.5 13.5078 0.5 14.75V19.25C0.5 20.4922 1.50781 21.5 2.75 21.5H7.25C8.49219 21.5 9.5 20.4922 9.5 19.25V14.75ZM12.5 2.75V7.25C12.5 8.49219 13.5078 9.5 14.75 9.5H19.25C20.4922 9.5 21.5 8.49219 21.5 7.25V2.75C21.5 1.50781 20.4922 0.5 19.25 0.5H14.75C13.5078 0.5 12.5 1.50781 12.5 2.75ZM21.5 14.75C21.5 13.5078 20.4922 12.5 19.25 12.5H14.75C13.5078 12.5 12.5 13.5078 12.5 14.75V19.25C12.5 20.4922 13.5078 21.5 14.75 21.5H19.25C20.4922 21.5 21.5 20.4922 21.5 19.25V14.75Z"
        fill="currentColor"
      />
    </svg>
  ),
  outlet: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.265 6.6H20.735C21.4328 6.6 22 6.03281 22 5.335C22 5.08406 21.9244 4.84 21.7869 4.63375L19.1881 0.735625C18.8822 0.275 18.37 0 17.8166 0H4.18344C3.63344 0 3.11781 0.275 2.81188 0.735625L0.213125 4.63031C0.075625 4.84 0 5.08406 0 5.33156C0 6.03281 0.567187 6.6 1.265 6.6ZM2.2 7.7V13.2V15.95C2.2 16.8609 2.93906 17.6 3.85 17.6H11.55C12.4609 17.6 13.2 16.8609 13.2 15.95V13.2V7.7H11V13.2H4.4V7.7H2.2ZM17.6 7.7V16.5C17.6 17.1084 18.0916 17.6 18.7 17.6C19.3084 17.6 19.8 17.1084 19.8 16.5V7.7H17.6Z"
        fill="currentColor"
      />
    </svg>
  ),
  report: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.14286 0C1.40937 0 0 1.40937 0 3.14286V18.8571C0 20.5906 1.40937 22 3.14286 22H18.8571C20.5906 22 22 20.5906 22 18.8571V3.14286C22 1.40937 20.5906 0 18.8571 0H3.14286ZM6.28571 9.42857C7.15491 9.42857 7.85714 10.1308 7.85714 11V15.7143C7.85714 16.5835 7.15491 17.2857 6.28571 17.2857C5.41652 17.2857 4.71429 16.5835 4.71429 15.7143V11C4.71429 10.1308 5.41652 9.42857 6.28571 9.42857ZM9.42857 6.28571C9.42857 5.41652 10.1308 4.71429 11 4.71429C11.8692 4.71429 12.5714 5.41652 12.5714 6.28571V15.7143C12.5714 16.5835 11.8692 17.2857 11 17.2857C10.1308 17.2857 9.42857 16.5835 9.42857 15.7143V6.28571ZM15.7143 12.5714C16.5835 12.5714 17.2857 13.2737 17.2857 14.1429V15.7143C17.2857 16.5835 16.5835 17.2857 15.7143 17.2857C14.8451 17.2857 14.1429 16.5835 14.1429 15.7143V14.1429C14.1429 13.2737 14.8451 12.5714 15.7143 12.5714Z"
        fill="currentColor"
      />
    </svg>
  ),
  item: (props: LucideProps) => (
    <svg
      {...props}
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1069 1.85243L14.1014 2.98681L11 4.17847L7.89861 2.98681L10.8931 1.85243C10.9618 1.82569 11.0382 1.82569 11.1108 1.85243H11.1069ZM5.19444 3.52917V7.81458C5.14479 7.82986 5.09514 7.84514 5.04549 7.86424L1.37882 9.25451C0.55 9.56771 0 10.366 0 11.2521V15.8049C0 16.6528 0.500347 17.4205 1.27951 17.7642L4.94618 19.376C5.49618 19.6167 6.11875 19.6167 6.66875 19.376L11 17.4701L15.3351 19.376C15.8851 19.6167 16.5076 19.6167 17.0576 19.376L20.7243 17.7642C21.4997 17.4243 22.0038 16.6528 22.0038 15.8049V11.2521C22.0038 10.3622 21.4538 9.56771 20.625 9.2507L16.9583 7.86042C16.9087 7.84132 16.859 7.82604 16.8094 7.81077V3.52917C16.8094 2.63924 16.2594 1.84479 15.4306 1.52778L11.7639 0.1375C11.275 -0.0458333 10.7365 -0.0458333 10.2476 0.1375L6.5809 1.52778C5.74444 1.84479 5.19444 2.64306 5.19444 3.52917ZM14.9722 8.03993L11.825 9.2316V5.82465L14.9722 4.61771V8.03993ZM5.9125 9.57917L8.90694 10.7135L5.80556 11.9014L2.70417 10.7135L5.69861 9.57917C5.76736 9.55243 5.84375 9.55243 5.91632 9.57917H5.9125ZM6.63056 17.3861V13.5476L9.77778 12.3406V16.0035L6.63056 17.3861ZM16.0875 9.57917C16.1562 9.55243 16.2326 9.55243 16.3052 9.57917L19.2997 10.7135L16.1944 11.9014L13.0931 10.7135L16.0875 9.57917ZM19.9833 16.0837L17.0194 17.3861V13.5476L20.1667 12.3406V15.8049C20.1667 15.9271 20.0941 16.034 19.9833 16.0837Z"
        fill="currentColor"
      />
    </svg>
  ),
  categories: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.375 1.375C12.375 0.614453 11.7605 0 11 0C10.2395 0 9.625 0.614453 9.625 1.375V4.125C9.625 4.88555 10.2395 5.5 11 5.5C11.7605 5.5 12.375 4.88555 12.375 4.125V1.375ZM12.375 17.875C12.375 17.1145 11.7605 16.5 11 16.5C10.2395 16.5 9.625 17.1145 9.625 17.875V20.625C9.625 21.3855 10.2395 22 11 22C11.7605 22 12.375 21.3855 12.375 20.625V17.875ZM0 11C0 11.7605 0.614453 12.375 1.375 12.375H4.125C4.88555 12.375 5.5 11.7605 5.5 11C5.5 10.2395 4.88555 9.625 4.125 9.625H1.375C0.614453 9.625 0 10.2395 0 11ZM17.875 9.625C17.1145 9.625 16.5 10.2395 16.5 11C16.5 11.7605 17.1145 12.375 17.875 12.375H20.625C21.3855 12.375 22 11.7605 22 11C22 10.2395 21.3855 9.625 20.625 9.625H17.875ZM3.22266 3.22266C2.68555 3.75977 2.68555 4.63203 3.22266 5.16914L5.16914 7.11563C5.70625 7.65273 6.57852 7.65273 7.11563 7.11563C7.65273 6.57852 7.65273 5.70625 7.11563 5.16914L5.16484 3.22266C4.62773 2.68555 3.75977 2.68555 3.22266 3.22266ZM16.8352 14.8887C16.298 14.3516 15.4258 14.3516 14.8887 14.8887C14.3516 15.4258 14.3516 16.298 14.8887 16.8352L16.8352 18.7773C17.3723 19.3145 18.2445 19.3145 18.7816 18.7773C19.3188 18.2402 19.3188 17.368 18.7816 16.8309L16.8352 14.8844V14.8887ZM3.22266 18.7773C3.75977 19.3145 4.63203 19.3145 5.16914 18.7773L7.11563 16.8309C7.65273 16.2938 7.65273 15.4215 7.11563 14.8844C6.57852 14.3473 5.70625 14.3473 5.16914 14.8844L3.22266 16.8352C2.68555 17.3723 2.68555 18.2445 3.22266 18.7816V18.7773ZM14.8887 5.16484C14.3516 5.70195 14.3516 6.57422 14.8887 7.11133C15.4258 7.64844 16.298 7.64844 16.8352 7.11133L18.7773 5.16484C19.3145 4.62773 19.3145 3.75547 18.7773 3.21836C18.2402 2.68125 17.368 2.68125 16.8309 3.21836L14.8844 5.16484H14.8887Z"
        fill="currentColor"
      />
    </svg>
  ),
  tags: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8242 0.680078L20.3156 6.23594C22.5672 8.51328 22.5672 12.1742 20.3156 14.4516L15.5031 19.3199C15.1035 19.7238 14.4504 19.7281 14.0465 19.3285C13.6426 18.9289 13.6383 18.2758 14.0379 17.8719L18.8461 13.0035C20.3027 11.5297 20.3027 9.16211 18.8461 7.68828L13.359 2.13242C12.9594 1.72852 12.9637 1.07539 13.3676 0.675781C13.7715 0.276172 14.4246 0.280469 14.8242 0.684375V0.680078ZM0 8.86133V2.4375C0 1.29883 0.923828 0.375 2.0625 0.375H8.48633C9.2168 0.375 9.91719 0.662891 10.4328 1.17852L17.6516 8.39727C18.7258 9.47149 18.7258 11.2117 17.6516 12.2859L11.9152 18.0223C10.841 19.0965 9.10078 19.0965 8.02656 18.0223L0.807813 10.8035C0.287891 10.2879 0 9.5918 0 8.86133ZM6.1875 5.1875C6.1875 4.82283 6.04263 4.47309 5.78477 4.21523C5.52691 3.95737 5.17717 3.8125 4.8125 3.8125C4.44783 3.8125 4.09809 3.95737 3.84023 4.21523C3.58237 4.47309 3.4375 4.82283 3.4375 5.1875C3.4375 5.55217 3.58237 5.90191 3.84023 6.15977C4.09809 6.41763 4.44783 6.5625 4.8125 6.5625C5.17717 6.5625 5.52691 6.41763 5.78477 6.15977C6.04263 5.90191 6.1875 5.55217 6.1875 5.1875Z"
        fill="currentColor"
      />
    </svg>
  ),
  settings: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.939 7.59508C22.0849 7.9917 21.9618 8.43391 21.6472 8.71656L19.6733 10.5128C19.7234 10.8911 19.7508 11.2787 19.7508 11.6707C19.7508 12.0628 19.7234 12.4503 19.6733 12.8287L21.6472 14.6249C21.9618 14.9075 22.0849 15.3497 21.939 15.7463C21.7384 16.2889 21.4968 16.8086 21.2187 17.31L21.0044 17.6793C20.7036 18.1808 20.3662 18.6549 19.9969 19.1017C19.728 19.4299 19.2812 19.5393 18.88 19.4117L16.3407 18.6048C15.7298 19.0743 15.0551 19.4664 14.3348 19.7627L13.765 22.3658C13.6738 22.7807 13.3547 23.1089 12.9352 23.1773C12.3061 23.2822 11.6588 23.3369 10.9977 23.3369C10.3367 23.3369 9.68932 23.2822 9.0602 23.1773C8.64078 23.1089 8.32166 22.7807 8.23048 22.3658L7.66063 19.7627C6.94032 19.4664 6.26561 19.0743 5.65472 18.6048L3.11999 19.4162C2.71881 19.5439 2.27204 19.4299 2.00307 19.1062C1.6338 18.6595 1.29644 18.1853 0.995555 17.6839L0.781288 17.3146C0.503197 16.8131 0.261577 16.2934 0.0609866 15.7509C-0.0848973 15.3543 0.0381923 14.9121 0.352754 14.6294L2.32675 12.8332C2.2766 12.4503 2.24925 12.0628 2.24925 11.6707C2.24925 11.2787 2.2766 10.8911 2.32675 10.5128L0.352754 8.71656C0.0381923 8.43391 -0.0848973 7.9917 0.0609866 7.59508C0.261577 7.05258 0.503197 6.53286 0.781288 6.03139L0.995555 5.66212C1.29644 5.16064 1.6338 4.68652 2.00307 4.23975C2.27204 3.91151 2.71881 3.8021 3.11999 3.92975L5.65928 4.73667C6.27017 4.2671 6.94488 3.87504 7.66518 3.57871L8.23504 0.975599C8.32622 0.560741 8.64534 0.232502 9.06476 0.164119C9.69388 0.0547065 10.3412 0 11.0023 0C11.6633 0 12.3107 0.0547065 12.9398 0.159561C13.3592 0.227944 13.6783 0.556182 13.7695 0.97104L14.3394 3.57416C15.0597 3.87048 15.7344 4.26255 16.3453 4.73211L18.8846 3.92519C19.2857 3.79754 19.7325 3.91151 20.0015 4.23519C20.3708 4.68196 20.7081 5.15608 21.009 5.65756L21.2233 6.02683C21.5014 6.52831 21.743 7.04802 21.9436 7.59052L21.939 7.59508ZM11.0023 15.3178C11.9696 15.3178 12.8972 14.9336 13.5812 14.2496C14.2651 13.5656 14.6494 12.638 14.6494 11.6707C14.6494 10.7034 14.2651 9.77579 13.5812 9.09183C12.8972 8.40786 11.9696 8.02362 11.0023 8.02362C10.035 8.02362 9.10736 8.40786 8.42339 9.09183C7.73943 9.77579 7.35518 10.7034 7.35518 11.6707C7.35518 12.638 7.73943 13.5656 8.42339 14.2496C9.10736 14.9336 10.035 15.3178 11.0023 15.3178Z"
        fill="currentColor"
      />
    </svg>
  ),
  profile: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.98259 18.8571H18.0174C17.6344 16.1906 15.346 14.1429 12.5714 14.1429H9.42857C6.65893 14.1429 4.36562 16.1906 3.98259 18.8571ZM0 3.14286C0 1.40937 1.40937 0 3.14286 0H18.8571C20.5906 0 22 1.40937 22 3.14286V18.8571C22 20.5906 20.5906 22 18.8571 22H3.14286C1.40937 22 0 20.5906 0 18.8571V3.14286ZM11 11.7857C11.9377 11.7857 12.8371 11.4132 13.5001 10.7501C14.1632 10.0871 14.5357 9.18773 14.5357 8.25C14.5357 7.31227 14.1632 6.41295 13.5001 5.74987C12.8371 5.0868 11.9377 4.71429 11 4.71429C10.0623 4.71429 9.16295 5.0868 8.49987 5.74987C7.8368 6.41295 7.46429 7.31227 7.46429 8.25C7.46429 9.18773 7.8368 10.0871 8.49987 10.7501C9.16295 11.4132 10.0623 11.7857 11 11.7857Z"
        fill="currentColor"
      />
    </svg>
  ),
  logout: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2379 3.55039L21.5145 8.82695C21.8238 9.13633 22 9.56172 22 10C22 10.4383 21.8238 10.8637 21.5145 11.173L16.2379 16.4496C15.9629 16.7246 15.5934 16.875 15.2066 16.875C14.4031 16.875 13.75 16.2219 13.75 15.4184V12.75H8.25C7.48945 12.75 6.875 12.1355 6.875 11.375V8.625C6.875 7.86445 7.48945 7.25 8.25 7.25H13.75V4.58164C13.75 3.77812 14.4031 3.125 15.2066 3.125C15.5934 3.125 15.9629 3.27969 16.2379 3.55039ZM6.875 3.125H4.125C3.36445 3.125 2.75 3.73945 2.75 4.5V15.5C2.75 16.2605 3.36445 16.875 4.125 16.875H6.875C7.63555 16.875 8.25 17.4895 8.25 18.25C8.25 19.0105 7.63555 19.625 6.875 19.625H4.125C1.84766 19.625 0 17.7773 0 15.5V4.5C0 2.22266 1.84766 0.375 4.125 0.375H6.875C7.63555 0.375 8.25 0.989453 8.25 1.75C8.25 2.51055 7.63555 3.125 6.875 3.125Z"
        fill="currentColor"
      />
    </svg>
  ),
  MoveUp: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-move-up"
    >
      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </svg>
  ),
  MoveDown: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-move-down"
    >
      <path d="M8 18L12 22L16 18" />
      <path d="M12 22V2" />
    </svg>
  ),
}
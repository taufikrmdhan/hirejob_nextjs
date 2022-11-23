<h1 align="center">Hire Job</h1>

## Table of contents
- [Description](#Description)
- [Project Structure](#Project)
- [Screenshoots](#Screenshoot)
- [Related Project](#Related-Project)
- [Contributing](#Contributing)
- [License](#License)


## Description
Hirejobs adalah sebuah aplikasi untuk mencari kerja yang dikembangkan menggunakan beberapa teknologi diantaranya : PostgreSQL, Express.js, dan Next.js. Pada aplikasi ini, user bisa login sebagai perekrut dan pencari kerja. Dalam menu pencari kerja nanti akan menampilkan list user pencari kerja beserta beberapa informasi terkait data pribadinya, selain itu user juga bisa melakukan CRUD pada halaman profile nya sendiri. Dalam menu perekrut nanti akan menampilkan list perekrut beserta beberapa data perusahaannya, serta perekrut juga dapat melakukan CRUD pada halaman profile perekrutnya.

## Project Structure

```
|── Frontend
   |── hirejob         # Project source code
       |── Components  # Layouts
       |── HOC         # Protection route
       |── layouts     # Layouting footer and navbar component in nextjs
       |── pages       # pages
       |── public      # Assets image
       |── styles      # styling pages
   |── .env            # Setting env backend to connecting   
   |── .gitignore      # File name for not uploaded on github
   |── .README.md      # For Readme In github
```

## Screenshoots
<details>
  <summary>
    Landing Page
  </summary>
<img src="/hirejob/screenshoots/landing.png" alt="Landing Page" />
</details>

<details>
  <summary>
    Home
  </summary>
<img src="/hirejob/screenshoots/home.png" alt="Landing Page" />
</details>

<details>
  <summary>
    Home (feature search, sort, pagination)
  </summary>
<img src="/hirejob/screenshoots/home2.png" alt="Landing Page" />
</details>

<details>
  <summary>
   Profile Perusahaan
  </summary>
<img src="/hirejob/screenshoots/profile_perusha.png" alt="Profile" />
<img src="/hirejob/screenshoots/profile_perus.png" alt="Profile" />
</details>

<details>
  <summary>
   Profile Jobseeker
  </summary>
<img src="/hirejob/screenshoots/profile_user.png" alt="Profile" />
</details>

<details>
  <summary>
    Login Page
  </summary>
<img src="/hirejob/screenshoots/login.png" alt="login" />
</details>

<details>
  <summary>
   Register
  </summary>
<img src="/hirejob/screenshoots/register.png" alt="Register" />
</details>


## Related Project
RESTful API for this web application, clone this for development Foodtemplate.\
[backend-slicingfoodtemplate](https://github.com/taufikrmdhan/backend_hirejob)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Run Project
Install package : npm i

Run Project : npm run dev

## Requirement
### Week 9 
- Teori (NextJS, SSR & CSR)
- UI
- Next component
- Navigation
- CRUD
- Search, sort, pagination
- Responsive
- ENV
- Reusable Component
- Deploy
- Buat semirip mungkin sesuai figma
- Gunakan Bahasa Inggris untuk nama class, id, fungsi dan komponen
- Upload/push ke github dan gunakan nama yang profesional
- Presentasikan

### Week 10
- Semua requirement di minggu 9 (terutama crud dan pagination, search dan sort)
- Menggunakan dynamic route
- Menggunakan static data dan path (SGG)
- Fetching dari server (SSR)
- Autentikasi (login, register, dan logout)
- Buat semirip mungkin sesuai figma
- Gunakan Bahasa Inggris untuk nama class, id, fungsi dan komponen
- Upload/push ke github dan gunakan nama yang profesional
- Presentasikan
- Teori, SSG, library and framework, unit testing


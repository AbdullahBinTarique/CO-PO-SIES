# CO-PO-SIES

A Django-based web application for managing CO-PO mappings, teachers, students, and admin workflows.

---

## 🚀 Features

* Manage users (Admin, Teachers, Students)
* Store subjects, branches, and batches
* Teacher assessment and CO/PO mapping
* Custom login system + Django Admin

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AbdullahBinTarique/CO-PO-SIES.git
cd CO-PO-SIES/COPO
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it:

* **Windows (PowerShell):**

  ```bash
  .\venv\Scripts\Activate.ps1
  ```
  
* **Linux / MacOS:**

  ```bash
  source venv/bin/activate
  ```

### 3. Install Requirements

```bash
pip install -r requirements.txt
```

If `requirements.txt` is missing, you can generate it:

```bash
pip freeze > requirements.txt
```

---

## ⚙️ Database Setup

### 1. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 2. Create a Superuser

```bash
python manage.py createsuperuser
```

Follow prompts to set up admin credentials.

---

## ▶️ Running the Server

Start the development server:

```bash
python manage.py runserver
```

Then visit:

* App: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
* Admin Panel: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

---

## 🔑 Login Info

* **Django Admin** → Use superuser credentials you created.
* **Custom Login** → Uses data from `Login_users` / `Admin_adminusers` tables. Example (from seed DB):

  ```text
  Email: abdul@gmail.com
  Password: abcd1234
  ```

---

## 📂 Project Structure

```text
COPO/
 ├── Admin/        # Admin app for subjects & mappings
 ├── Login/        # User login/registration app
 ├── Teachers/     # Teacher-related models & views
 ├── COPO/         # Project settings & URLs
 ├── db.sqlite3    # Default SQLite database
 └── manage.py     # Django management script
```

---

## 🧑‍💻 Development Notes

* Default database: **SQLite (`db.sqlite3`)**
* To inspect DB:

  ```bash
  python manage.py dbshell
  ```

* If you change models, always run:

  ```bash
  python manage.py makemigrations
  python manage.py migrate
  ```

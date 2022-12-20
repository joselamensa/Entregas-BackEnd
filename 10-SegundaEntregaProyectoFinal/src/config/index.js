import dotenv from "dotenv";
dotenv.config();

const PRODUCTS_FILENAME = "products";
const CARTS_FILENAME = "carts";

const config = {
  SERVER: {
    PORT: process.env.PORT || 8080,
    SELECTED_DATABASE: process.env.SELECTED_DB ?? "memory",
  },
  DATABASES: {
    filesystem: {
      PRODUCTS_FILENAME,
      CARTS_FILENAME,
    },
    mongo: {
      url: process.env.MONGO_DB_URL,
      dbName: process.env.MONGO_DB_NAME,
    },
    firebase: { /* Cambiar por la configuracion personal */
      "type": "service_account",
      "project_id": "backend-43495-44e0b",
      "private_key_id": "e6f50323edd579051879b57d9376672987fccab0",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyISidE4NdfaYz\nYfLgOV1OhYq3duRdnoI0jmlZh4ewIVFw+0HnBGdqmxMtj8Y0aotPAH/IBg8SNsqf\nQaBCkMk2PYkM3j7OIqnfnQjgS/T0tWy7H4Y+7WKrO0q1kevNA+TczwSAop0iOGLy\njjRvYqyamVnuhjo2/ChDZ3xDRzwoGj89ExexaT9R6hPNb5bmEcZ4YJ8mNEsCwdL/\nm82iBtXs188H4jdINvS5N2e+E/y2Thi0amhlgBNyP6j1+u5HPZ9ugWgPbsUpwAhW\ncUbIR2m8c6oPCJ/qTPeP2JhuZGgP5CG69FjN9HL7a6paXd4bfwCCPBItASZdBtES\nm8aDk9+pAgMBAAECggEAGH06ii3Ol6HYoaPLskvwqgTuBz8PMlfCattRXH+nhe1u\ntuu0KcCPPzbGsjLb+wTS1i+pYaSDmetye+aX0873+r8HAn/jfo+Bbz61o7CNor72\njdtNp4UXVZc3NDM1ieAJLNpBMjYpCDVcVSB70Pxt4mtG0+YcRsbv+iRWDyHSAWku\n48L2EEo/uaWf4Cgx8tjWMROFN6UWi+4bzJQ1sc1YOaTsamGOX2tB1z37yqBkHchH\n1zeE8b/ohWIoi59nsGQwJbuWlMZ2jOe7b1UN0DwmgOvx5nhb6SizuYNmeCb4B+l0\nCuMrOkZRcienzuVsRV12DfqT1PE3auyBKLgW6kjkyQKBgQD6pA2x/E5XPkjW77jo\na6mFGCUTIt02oVitfSjnpiFmLBC4xAHw/x7lAO68dDu+kpWUIAS0H8oXwJFRSN3H\nsZ3/gQk82QUBt7JX84JfZFfMcM/J6CWB1lltpdPd+Vftb4UuA6R2+ZHHhtRh1iwI\nm+L/U0UB3Ei3tGIMdFGd2MMnGwKBgQC18DIuUtgxU/mdiGqING60OSUJHDidlfS3\n34d2Jor4G1NGPu7be3O+DAzNXdeYtwB4UdDQ7unqCpgRncW3J6tQxYdGiRCffiY6\nYs5A2rPtKXmhdhhLqncfPv9xrRhLJuRhUsC8HPb+LicNr6GiRq13dCkwfgmgQ375\n//ALKf8siwKBgQDvAcfphR6zhTpydBDQ2fHCcF7SW7m1IbDtZ1+9XqeUxcqAVrE/\nPhkY6YW/AdwDA8dNhCbYGURe2Av7BlAu4Eo5XrQPaSekFqcjxZr6Gja7RoxvDkfO\nAzguHibmEqLtUR4f3etUZPLF4OXgEhrVbsnNDnvMpWJWg9XH6Jf3vL+EJwKBgHpB\n4Qad5ucm3drNG4FRcn6q08dOboD+joasr3NmrQXSHuBaU9mrGHjB0iyCfekCOE+h\n8ucjVI5P9iYIVh8gig9p3OA6JLB4banYUW7lR/j7YN9t4x+dehTGGZNC1MtTZC4+\nFIOUFylwzA93UO8h/VkC9ta+KyvFj2LhaGWoH+/HAoGAV68+4CVxFkHCrqC8aNuj\nw6yekROq4UJk5q8SS16UF1EHZnr1NKPB9AytB8TkgVf8XAWZkqlU2daQMjmEpN2U\nkn85M7KdrdOXk/K+6DitOF5xIi/XGxUvy5IbcIExmuzz7nJmIqAuczQTGgnJG0Gf\nZvS0MCjQV9AmE5+JDJThVSk=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-qpeqq@backend-43495-44e0b.iam.gserviceaccount.com",
      "client_id": "115158810142577279496",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qpeqq%40backend-43495-44e0b.iam.gserviceaccount.com"

    },
  },
};

export { config }
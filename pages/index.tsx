import { useDisclosure } from "react-use-disclosure";
import { useState } from "react";

import { Formik, Form, Field, FormikProps } from "formik";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import NibModal from "../components/NibModal";

import {
  Grid,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

interface FormValues {
  nib: number;
  date: Date;
}

interface FormType {
  field: string;
  form: any;
}

export default function Home(props: any & FormikProps<FormValues>) {
  const { isOpen, open, close } = useDisclosure();
  const [NIB, setNIB] = useState();
  function validateNIB(value: number) {
    let error;
    if (!value) {
      error = "NIB is required";
    }
    return error;
  }
  function validateDate(value: string) {
    let error;
    if (!value) {
      error = "Tanggal NIB is required";
    }
    return error;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tracking NIB</title>
        <meta name="description" content="Tracking Nomor Induk Berusaha" />
        <meta
          name="keywords"
          content="NextJS, React, Chakra-UI, JavaScript, Tracking NIB, Nomor Induk Berusaha"
        />
        <meta name="author" content="randhi.pp@gmail.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tracking NIB</h1>
        <h4>Cek status NIB Nomor Induk Berusaha disini!</h4>

        <Grid width="100%" mt={20}>
          <Formik
            initialValues={{ nib: "", date: "dd-mm-yyyy" }}
            onSubmit={async (values, actions) => {
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");

              var raw = JSON.stringify({
                nib: values.nib,
                date: values.date,
              });

              var requestOptions: any = {
                method: "POST",
                headers: myHeaders,
                body: raw,
              };

              const res = await fetch("/api/nib", requestOptions);
              const data = await res.json();
              setNIB(data);
              open();
              actions.setSubmitting(false);
            }}
          >
            {(props) => (
              <Form>
                <Field name="nib" validate={validateNIB}>
                  {({ field, form }: FormType) => (
                    <FormControl
                      isInvalid={form.errors.nib && form.touched.nib}
                    >
                      <FormLabel htmlFor="name">
                        Nomor Induk Berusaha (NIB)
                      </FormLabel>
                      <Input
                        {...field}
                        id="nib"
                        placeholder="Masukkan NIB / Nomor Induk Berusaha"
                        type="string"
                      />
                      <FormErrorMessage>{form.errors.nib}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="date" validate={validateDate}>
                  {({ field, form }: FormType) => (
                    <FormControl
                      isInvalid={form.errors.date && form.touched.date}
                    >
                      <FormLabel htmlFor="name" mt={4}>
                        Tanggal Nomor Induk Berusaha (NIB)
                      </FormLabel>
                      <Input
                        {...field}
                        id="date"
                        placeholder="Masukkan Tanggal Terbit NIB"
                        type="string"
                      />
                      <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={8}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                  width="100%"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          {NIB && <NibModal isOpen={isOpen} close={close} NIB={NIB} />}
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a href="https://wafvel.com" target="_blank" rel="noopener noreferrer">
          Wafvel - Whatsapp API
        </a>
        <a
          href="https://github.com/randhipp/tracking-NIB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/GitHub-Mark-32px.png"
              alt="Github Logo"
              width={16}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

"use client"

import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { Loading } from './Loading';
import { FormEvent, useState } from 'react';

const schema = yup.object().shape({
    fullName: yup.string().min(2, 'Por favor, informe um nome válido').required('Por favor, informe um nome válido'),
    email: yup.string().email('Por favor, insira um e-mail válido.').required('Por favor, insira um e-mail válido.'),
    phone: yup.string().min(16, 'Por favor, informe um nome válido.').required('Por favor, informe um nome válido.'),
    message: yup.string().min(1, 'Por favor, escreva aqui sua mensagem.').required('Por favor, escreva aqui sua mensagem.'),
  });

export function Contact() {

    function phoneMask(formData:FormEvent<HTMLInputElement>) {
      const inputValue = formData.target;
      const numericValue = inputValue.replace(/\D/g, "");
      const formattedPhone = numericValue.replace(/(\d{2})(\d)(\d{4})(\d{4})/, "($1) $2 $3-$4");
      formData.target.value = formattedPhone;
    }

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      } = useForm({ resolver: yupResolver(schema) });
    
    const [removeLoading, setRemoveLoading] = useState(true);

    const sendEmail = (formData:FormData) => {

      setRemoveLoading(false)
      
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_USER_ID;

      emailjs
      .send(`${serviceId}`, `${templateId}`, formData, `${userId}`)
      .then(
        () => {
          
          Swal.fire({
            icon: "success",
            title: "Sua mensagem foi enviada com sucesso!",
            text: "Em breve um de nossos consultores entrará em contato. Até logo!",
            confirmButtonText: "Fechar",
            customClass:{
              confirmButton: 'confirm-button-class',
              title: 'title-class',
              icon: 'icon-class'
            },
          })
          setRemoveLoading(true)
        },
        (error) => {
          Swal.fire({
            icon: "error",
            text: ("Ops, ocorreu um erro! Tente novamente mais tarde."),
            confirmButtonText: "Fechar",
            
          }), console.log(error.text);
        })
      reset();
    };

    return(
      <section id='Contato' className={styles.contact}>
          <div className={styles.container}>
            
            <h1>Entre em contato</h1>
            <p>Vamos conversar sobre os seus projetos, desafios em tecnologia e como podemos impulsionar o seu negócio? Você receberá um retorno em menos de 24 horas.</p>
            
            <div className={styles.containerLoader}> 
              
              {!removeLoading && <Loading />}
              <form autoComplete="new-off" onSubmit={handleSubmit(sendEmail)}>
                
                <input {...register('fullName')} placeholder="Nome" autoComplete="new-password" />
                {errors.fullName?.message && <span className={styles.errorMsg}>{errors.fullName.message}</span>}
                
                <input {...register('email')} placeholder="E-mail" autoComplete="new-password" />
                {errors.email?.message && <span className={styles.errorMsg}>{errors.email.message}</span>}
                
                <input {...register('phone')} placeholder="Telefone (somente números)" onInput={phoneMask} maxLength={16} autoComplete="new-password" />
                {errors.phone?.message && <span className={styles.errorMsg}>{errors.phone.message}</span>}

                <textarea {...register('message')} placeholder="Digite aqui a sua mensagem" />
                {errors.message?.message && <span className={styles.errorMsg}>{errors.message.message}</span>}
                
                <button className={styles.formButton} type="submit" value="SEND MESSAGE">Enviar</button>

              </form>
            
            </div>
          </div>
      </section>
    )
}
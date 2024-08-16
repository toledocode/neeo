import styles from './Contact.module.css';
import { ProfileRegistrationForm } from "./profile-resgistration-form";

export function CareerRegistration() {
    return(
        <section >
          <div className="flex justify-center py-6 bg-black">
            
            <ProfileRegistrationForm />

          </div>
      </section>
    )
}
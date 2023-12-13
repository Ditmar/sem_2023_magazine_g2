'use client';
import styles from './styles.module.scss';
import useForm from './useForm';


  const UserForm: React.FC = () => {
    const initialFormState = { email: '', password: '' };
    const [form, handlerChangeForm, handlerResetForm] = useForm(initialFormState);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Form Submitted:', form);
        handlerResetForm();
    }
  return (
  <>
      <div className={styles.Login}>
        <div className={styles.imagen}></div>
        <form onSubmit={handleSubmit} className={styles.sign_in_htm}>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>Email</label>
          <input  type="email" placeholder="" name="email"  className={styles.input_field}value={form.email} onChange={handlerChangeForm} />
        </div>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>password</label>
          <input type="password" placeholder="" name="password" className={styles.input_field}value={form.password} onChange={handlerChangeForm} />
        </div>
          <div className={styles.body_button}>
            <button type="submit" className={styles.button}>
              INICIAR
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default UserForm;
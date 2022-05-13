import NavBar from "./NavBar";

const Form = () => {
  return (
    <div className='form'>
      <NavBar />
      <form className='form__container'>
        <label>
          <input
            className='form__container__input'
            type='text'
            placeholder='Nom et Prenom'
          />
        </label>
        <label>
          <input
            className='form__container__input__lieu'
            type='text'
            placeholder='Telephone'
          />
        </label>
        <label>
          <input
            className='form__container__input__lieu__number'
            type='number'
            placeholder='E-Mail'
          />
        </label>
        <textarea
          className='form__container__input__lieu__number__text'
          type='text'
          placeholder='Commentaires'
        />
        <input
          className='form__container__input__lieu__number__text__bouton'
          type='submit'
          value='Rejoindre Evenement'
        />
      </form>
    </div>
  );
};

export default Form;

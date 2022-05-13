const Form = () => {
  return (
    <div className="form">
      <form className="form__container">
        <label>
          <input
            className="form__container__input"
            type="text"
            placeholder="Mon évènement"
          />
        </label>
        <label>
          <input
            className="form__container__input__lieu"
            type="text"
            placeholder="Lieu"
          />
        </label>
        <label>
          <input
            className="form__container__input__lieu__number"
            type="number"
            placeholder="Nombre de places"
          />
        </label>
        <textarea
          className="form__container__input__lieu__number__text"
          type="text"
          placeholder="Descriptif de l'évènement"
        />
        <input
          className="form__container__input__lieu__number__text__bouton"
          type="submit"
          value="Créer évènement"
        />
      </form>
    </div>
  );
};

export default Form;

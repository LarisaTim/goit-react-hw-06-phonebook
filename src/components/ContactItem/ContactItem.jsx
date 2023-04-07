import s from "./ContactItem.module.css";

function ContactItem({ id, name, number,onDeleteContact }) {
   
  return (
    <li key={id} >
      <span className={s.itemText}>{name}</span>
      <span className={s.itemText}>{number}</span>
      <button
        type="button"
        className={s.button}
         data-id={id}
        onClick={onDeleteContact}
      >
        Delete
      </button>
   </li>
  );
}



export default ContactItem;
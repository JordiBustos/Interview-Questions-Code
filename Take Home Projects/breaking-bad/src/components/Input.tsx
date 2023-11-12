interface InputProps {
  name: string;
  handleNameChange: (name: string, isFirst: boolean) => void;
  isFirst: boolean;
}

export default function Input({ name, handleNameChange, isFirst }: InputProps) {
  return (
    <div className="col">
      <label htmlFor={isFirst ? "firstName" : "lastName"}>
        {isFirst ? "First Name" : "Last Name"}:
      </label>
      <input
        onChange={(e) => handleNameChange(e.target.value, isFirst)}
        type="text"
        value={name}
      />
    </div>
  );
}

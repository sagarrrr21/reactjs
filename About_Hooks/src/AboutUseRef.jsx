import { useRef } from "react";
function FocusInput() {
  const inputRef = useRef(null);
  const handleFocus = () => inputRef.current && inputRef.current.focus();
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;

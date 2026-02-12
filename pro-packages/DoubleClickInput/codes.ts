export const reactTsxCodeStr = `const [isEditing, setIsEditing] = useState(false);
const [inputValue, setInputValue] = useState(value);
const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

const handleDoubleClick = () => {
  setIsEditing(true);
  setTimeout(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
      inputRef.current.scrollTop = inputRef.current.scrollHeight;
    }
  }, 0);
};

const handleBlur = () => {
  setIsEditing(false);
  if (onChange && inputValue !== value) {
    onChange(inputValue);
  }
};

const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleBlur();
  }
  if (e.key === 'Escape') {
    setInputValue(value);
    setIsEditing(false);
  }
};`;

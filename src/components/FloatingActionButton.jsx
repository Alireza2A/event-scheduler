function FloatingActionButton({ onClick }) {
    return (
        <button
        onClick={onClick}
        className="flex items-center justify-center size-32 aspect-square text-6xl text-white bg-[#27450D] bg-opacity-70 rounded-full shadow-md transition">
        +
        </button>
    );
    }

    export default FloatingActionButton;

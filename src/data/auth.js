const BASE_URL = "http://localhost:3001/api/auth";

const signIn = async (formData) => {
    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

    const data = await res.json();

    return data;
};

const me = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

    const data = await res.json();

    return data;
};

export { signIn, me };

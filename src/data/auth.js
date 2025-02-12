const BASE_URL = "http://localhost:3001/api";
const signIn = async (formData) => {
    if(!formData)
    {
        return;
    }
    const res = await fetch(`${BASE_URL}/auth/login`, {
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
    if(!token) throw new Error ("Token is not found!");
    const res = await fetch(`${BASE_URL}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

    const data = await res.json();

    return data;
};
const signUp = async (formData) => {
    if (!formData) {
        return;
    }
    const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);


    return res;
};
export { signIn, me, signUp };

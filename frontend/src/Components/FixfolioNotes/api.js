import { config } from '../../config.js';

const API_URL = config.API_URL;
const AUTH_URL = config.AUTH_URL;

function getToken() {
  // Use the same key as AuthContext (likely 'token')
  return localStorage.getItem('token');
}

function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function handleResponse(res) {
  if (!res.ok) {
    let message = `Request failed: ${res.status}`;
    try {
      const data = await res.json();
      if (data && data.error) message = data.error;
    } catch {
      // Ignore JSON parsing errors
    }
    throw new Error(message);
  }
  return res.json();
}

export async function fetchNotes() {
  const res = await fetch(API_URL, { headers: { ...authHeaders() } });
  return handleResponse(res);
}

export async function addNote(note) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(note),
  });
  return handleResponse(res);
}

export async function updateNote(id, note) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(note),
  });
  return handleResponse(res);
}

export async function deleteNote(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE", headers: { ...authHeaders() } });
  return handleResponse(res);
}

export async function login(email, password) {
  const res = await fetch(`${AUTH_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
}

export async function signup({ username, email, password }) {
  const res = await fetch(`${AUTH_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return handleResponse(res);
} 
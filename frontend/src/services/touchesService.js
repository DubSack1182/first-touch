import sendRequest from './sendRequest';

const BASE_URL = '/api/touches';

export function index() {
    return sendRequest(BASE_URL);
  };

export function show(touchId) {
  return sendRequest(`${BASE_URL}/${touchId}`)
};

export async function create(touchFormData){
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(touchFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function createComment(touchId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${touchId}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function deleteTouch(touchId) {
  try {
    const res = await fetch(`${BASE_URL}/${touchId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function deleteComment(touchId, commentId) {
  try {
    const res = await fetch(`${BASE_URL}/${touchId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};


export async function update(touchId, touchFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${touchId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(touchFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}; 

export async function updateComment(touchId, commentId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${touchId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
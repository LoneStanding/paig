import useApiConfig from './apiConfig';

export async function callApi(path, options = {}) {
  const { apiBaseUrl } = useApiConfig.getState();
  return fetch(`${apiBaseUrl}/api${path}`, options);
}

export async function fetchUserEmail() {
  try {
    const response = await callApi('/user/email', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user email');
    }

    const data = await response.json();
    return data.email;
  } catch (error) {
    console.error('Error fetching user email:', error);
    return null;
  }
}

export async function updateEvalAuthor(evalId, author) {
  const response = await callApi(`/eval/${evalId}/author`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ author }),
  });

  if (!response.ok) {
    throw new Error('Failed to update eval author');
  }

  return response.json();
}

import React from 'react';
import emailjs from 'emailjs-com';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from '../pages/Contact/Contact';

jest.mock('emailjs-com', () => ({
  send: jest.fn(() => Promise.resolve()) }));

afterEach(() => jest.clearAllMocks());

const testData = { from_name: 'foo', reply_to: 'foo@email.com', message_html: 'bar' };

describe('when the form is filled out correctly', () => {
  test('sends the email', async () => {
    render(<ContactForm />);

    emailjs.send.mockImplementation(() => Promise.resolve());

    const nameField = screen.getByLabelText(/Nome/i);
    const emailField = screen.getByLabelText(/E-mail/i);
    const messageField = screen.getByLabelText(/Mensagem de contato/i);

    userEvent.type(nameField, testData.from_name);
    userEvent.type(emailField, testData.reply_to);
    userEvent.type(messageField, testData.message_html);

    expect(nameField.value).toEqual(testData.fromName);
    expect(emailField.value).toEqual(testData.replyTo);
    expect(messageField.value).toEqual(testData.messageHTML);

    userEvent.click(screen.getByText(/Enviar/i));

    expect(await emailjs.send)
      .toHaveBeenCalledWith('gmail', 'template_example', testData, 'user_tEStkEy');

    expect(screen.queryByText(/O campo "Nome" é obrigatório./i)).not.toBeInTheDocument();
    expect(screen.queryByText(/E-mail inválido./i)).not.toBeInTheDocument();
    expect(screen.queryByText(/O campo "Mensagem de contato" é obrigatório./i))
      .not.toBeInTheDocument();

    expect(nameField.value).toEqual('');
    expect(emailField.value).toEqual('');
    expect(messageField.value).toEqual('');
  });
});

describe('when the form has fields with errors', () => {
  test('shows error messages', async () => {
    render(<ContactForm />);

    userEvent.click(screen.getByText(/Enviar/i));

    expect(await emailjs.send).not.toHaveBeenCalled();
    expect(screen.getByText(/O campo "Nome" é obrigatório./i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail inválido./i)).toBeInTheDocument();
    expect(screen.getByText(/O campo "Mensagem de contato" é obrigatório./i))
      .toBeInTheDocument();
  });
});

describe('when the emailjs send returns an error', () => {
  test('shows error message and keep fields values', async () => {
    render(<ContactForm />);

    emailjs.send.mockImplementation(() => Promise.reject());

    const nameField = screen.getByLabelText(/Nome/i);
    const emailField = screen.getByLabelText(/E-mail/i);
    const messageField = screen.getByLabelText(/Mensagem de contato/i);

    userEvent.type(nameField, testData.from_name);
    userEvent.type(emailField, testData.reply_to);
    userEvent.type(messageField, testData.message_html);

    userEvent.click(screen.getByText(/Enviar/i));

    expect(await emailjs.send)
      .toHaveBeenCalledWith('gmail', 'template_example', testData, 'user_tEStkEy');

    expect(await screen.findByText(/Ocorreu um erro durante o envio. Tente novamente./i))
      .toBeInTheDocument();

    expect(nameField.value).toEqual(testData.fromName);
    expect(emailField.value).toEqual(testData.replyTo);
    expect(messageField.value).toEqual(testData.messageHTML);
  });
});

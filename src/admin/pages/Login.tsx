import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "@/assets/logo.png";

/* ─────────────────────────── types ─────────────────────────── */
interface LoginForm {
  email: string;
  password: string;
}

interface LoginErrors {
  email?: string;
  password?: string;
}

/* ─────────────────────────── styles ─────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Sora:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0c0c0a;
  --gold: #c9940a;
  --gold2: #e8b020;
  --text: #f0ede8;
  --muted: #6a6a66;
  --border: #3a3a36;
  --error: #e05555;
}

body {
  background: var(--bg);
  font-family: 'Sora', sans-serif;
}

.login-page {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0c0a;
  padding: 24px;
}

.login-box {
  width: 100%;
  max-width: 600px;
  animation: fadeUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Logo ── */
.login-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 52px;
}

.logo-text-block {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.logo-brand {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3.5px;
  color: var(--gold);
  text-transform: uppercase;
  line-height: 1.6;
}

/* ── Fields ── */
.login-form {
  display: flex;
  flex-direction: column;
}

.field-group {
  margin-bottom: 22px;
}

.field-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: 0.2px;
}

.field-input-wrap {
  position: relative;
}

.field-input {
  width: 100%;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 13px 16px;
  color: var(--text);
  font-family: 'Sora', sans-serif;
  font-size: 0.84rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  letter-spacing: 0.3px;
}
.field-input::placeholder { color: #444440; }
.field-input:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 2px rgba(201, 148, 10, 0.1);
}
.field-input.error { border-color: var(--error); }
.field-input.pw-field { padding-right: 44px; }

.field-error {
  display: block;
  font-size: 0.67rem;
  color: var(--error);
  margin-top: 5px;
  letter-spacing: 0.2px;
}

/* pw toggle */
.pw-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #555550;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  transition: color 0.2s;
}
.pw-toggle:hover { color: var(--gold); }

/* ── Button row ── */
.login-btn-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.btn-login {
  background: linear-gradient(135deg, #c9940a 0%, #e8b020 100%);
  color: #0c0c0a;
  border: none;
  padding: 12px 42px;
  font-family: 'Sora', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  border-radius: 999px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(201, 148, 10, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 110px;
}
.btn-login:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 6px 28px rgba(201, 148, 10, 0.4);
}
.btn-login:active { transform: translateY(0); }
.btn-login:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

/* spinner */
.spinner {
  width: 13px;
  height: 13px;
  border: 2px solid rgba(10, 10, 8, 0.3);
  border-top-color: #0c0c0a;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 480px) {
  .login-page { padding: 20px; }
  .login-logo { margin-bottom: 40px; }
}
`;

/* ── Logo image ── */
const LOGO_B64 = "/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABgAJEDASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAAAAYEBQcCAwgB/8QAQxAAAQMDAgIFBQ0HBAMAAAAAAQIDBAAFEQYhEjEHQVFhcRMXIlXSFBUWIzJCUmKBkZKksTNTcoKhweEkQ1Syk6LC/8QAGgEAAgMBAQAAAAAAAAAAAAAABAUAAQMCBv/EADYRAAECAwQFCwQDAQEAAAAAAAEAAgMEERIhMXEUQZGhsQUTFSIyUVJhgZLwU8HR4RYzcqJC/9oADAMBAAIRAxEAPwD4yooq70Zpm5aqvCbdbkpSAON99w4bYbHNaj1D9a4iRGw2l7zQBdNaXGgxVZb4Uy4zG4cCK9KkOnCGmkFSlHuAp/j9H1qsiEu65vwiP8APF72W8B2T4KV8hB8c+NWEi+2zSkJyyaIyHFJ4Jl5Wn46SesN/QR2Y35eJT3FrcWpxxSlrUSVKUckk9ZoIc/M31sN/6O3DjktjzcK7tHd++Gaa0ah0tafQ09oi2kpO0i6EynFd/CThJ8K9R0l6sa2hSYcFPUmPCaAH3pNJtFddHSx7bbX+utxqq0mLqNMruCcvOhrr15+UZ9ijzoa69eflGfYpNoq+jZP6LfaPwppUfxnaU5edDXXrz8oz7FHnQ1168/KM+xSbRU6Nk/ot9o/CmlR/GdpTl50NdevPyjPsUedDXXrz8oz7FJtFTo2T+i32j8KaVH8Z2lOJ6TNYObSp8eUn6L0Nkj+iRXCtVWO5Ao1DoizSsjBehpMV3xynmaUaKro2VHZYG5dXhRTSYut1c7+KZXdEaZ1CCdHX1caaeVtu2EKWexDg2J7Ad+3FIl9s10sVxXb7vCehyUc0ODmO0HkR3jaramy1ani3C3JsGs467nbOTMjOZMM4wFIVzIH0T/g0WzEve0229x7QyOvI3+ausOJceqd36+XLLqKZteaQl6XlsrS+ida5aeOFOaHoPJ7D2KHWKWaLhRWRmB7DUFYvYWGy7FFFFFaLlSLbClXGexAhMqekyHA20hI3UonArTtSvRdK2X4E2RxKnBhV5mI2Mh4f7f8Cc4x/nMDonYTZLLdtdPoy7FHuK2AjIMlxO6v5U/qaXlqUtalrUVKUcqUTkk9tL6aTHIPZZvdju45Ij+qH5u4fvhmvyiiimCHRRRVki0vHTDt9UeFlM1ERA+mooUtX3AJ/FXLnhuKsAnBVtFb30JWWyuaEamSLTAkyH33C47IjIdVhJwAOIHAAHIdZNd9Juo9MaVimJE0/YZF5dTlto21gpYSRs44OHn1pT18ztjiR9OWpoy0OESQabMTkjdCpCEVzgAsBophiaU1PdbO/qSLa3X4gcUpS0BIUrGSpSEDcpHWUjA37Dh50D0gaekKbt+rbBY2nDsm4ItbPCo9XlUhG38SR2ZHNVMZibMNhdCbbpiAbx87sUPDhBzgHGle9ZLRX1k3ZtOvIQpNhsTrTqcpUiAwpK0nrCgnBB7Qa+cGLAi6a/laeg/EhUqQ1GTnO6ePgTk9pSBnvoLk7luFO2+qW2RU1W0xJug0vrVLlFB2ODRTpBooooqKJr0ZdYUiI9pLUR47LPOEOKO8N75rqezc793dkFD1VY5unNQS7NPSA9GXw8Q5LSd0qHcQQasaaNYtnU/RrEv5wu52JxMKYvPpLjK/ZLPgo8P2k0veNGjh47LzQ56j64H0RDTzsOycRhlrH32rMqKKKYIdalqxAtWiNJ6fbHCowzcZAHNS3jlOe8JGPClKnHpjHktdPwx8mJGjsJ8A0k/wB6WYdsuUxrysS3y5DeccTTKlDPZkCgOTyBKtef/XW91/3REz/aWjVdsuUSiryNo7VskEx9L3t0DnwQHT/81ZWHQGppd7iRrhYbrCiLeSJDzsVaA2jPpHJHPGcDtreJNwIYJc8XeYWbYT3GgCqdR2Rdmh2ZbxV5a4QBMUg/MSpxaUD7UpSr+anvpDtHvF0Q6ftqkcLwl+WkbYPlVtqKs94GE/yirfWlobvXS3p+KWEmIzAS862B6IbQ64eDwOAn7RUjpajzNUaetzVlZcuDrkxTg8kM5ASoE55c/vrz7+UTFiS1o0r1j3DGl+1MBLWGxKZDdVLVi16zpnoziW62qQ/eXXHSAU5RFSVbLVnZSj1J3HWeoHx6ONEStUTTqHUa31wHHFL+MWfKzV5OTxc+DPNXM7gb5KVSZpW+RLMLu5DKoyVqQ8UekWFJVwkOD5u/Xy37dq1PQ3SZb7olqBeBHtkwAIQtICI6wAAAOps46vk7bY2FazzHy8GJEkRVzibRF5GWW7HzXEAiI9rY5oALhqTjdNUabsEiPb59zjW9zgT5FlLa8NoGyccCSEDbAziqHXPR9ZtTpVcIK2YFxcAWmQ2MsyM8isJ7efGnc7khWc15dIWhoep1GW097iuqEhIcUCW3AOSVjmO5Q6uo7Yzuzag1V0eXH3suEZa4meIxHlegoZ+W0sZxnfcZBPMHFJ+T5S2wRZKLSKMQdf5GdfRGTEWy6xGb1NRGpd2XUGrejW6i2z461wyryiobystOA81tLHI/WTtkYUDjFRtCTETel2JcGUrbRIuDjyAo+kkK4iMkdYzWv2G+ad1hCStpuLMDR43IsxhC1sHOMlCgRjl6Q23x3VmumbDdWekhN6FtcTa0XV1Hlm0jgR6SgBgchuPDamUKcZFZHEWHYiWaHVXGnzehnQXMLLDrTa3eSo+lqzCza4mpabCI0s+62AkYASsnIA7AoKT9lLU6HLgyDHmxX4rwSFFt5soUARkHB3wQQR41r/TbCZuunm7vFIcdtckx5BSPkpVjIJ+qoo/8lc9MOl515Ztl0tEB+ZKbbEd9thsqUUY4kKwNzglQJ700TI8qt5qC2JrqCTqIAptHFZx5Q2nluqh2rG6KYTofWgQV/BK+lI5qEB0j/rUJzTuoG/2liuiNs+lEcH9qdtjwnYOG1AljhiFV04dFYTOutw028fib1AejYPIOBJUhXiCDjxpSdacZXwOtrbV2KGDV50dPKj68sa08zOaR9ilBJ/WsZ5luWeB3GmYvG9aS5sxW5pF9753/ABHvwmivrH4Dwf3SfvFFee/lMLwpj0S/vWNdMh8rrp+aPky40d9J7QWkj+1KCXFpGErUB3GmvVivfXRGk9QoyoiF72yD9FbJITnvIJNKVPuTrpZrPD1fbd9kvmf7Se+/bevTyz371z8RqSxcbhxIb93yuAkAp8srGOznUKu2f2yP4hRha04hYglb5r+UixIvGo0uAS1xRb4g5cOVqVt35JV/IKV9QXc23oatcZlfA/PaSwnGx4BlSyP/AFB7l1WdON591agRaGl5bh8S3cHm4vfH2J4fAlVK2prsmfEtEJpRLMCEhruLh9JR/qE/y15rk/k4ugwXvGu16AdX7FM5mZDXva3upvvWj9Feo7HC0tEtcy6x2JanXMNOcQ2J61Y4RnvNGt+jiJPW5MsaW4MzcqjEcLLh+r+7Pd8nl8mlGy6I9/NIM3O3SeC4eUWlbLygG3QDtwq+afHY9or10zrS86Yk+9F7YffiskILLuQ9HH1Cerl6J27MZzUfLOEd8aRidcE2mnX81V2qNiiw1kdt1Lj8+eS70zrS+aSle817jPPxWVcKmXdnWB9Qnq5EA5HZjOa1e4xLXqGytNz4yZMR9pLzXGMLQFpBCknmlWCP0II2qvjvaf1NEZnoZhXJtrASp1kKWydzwqB3TvnY7HmM86XekPXItCXLVaXAq5fJddTyjdw+v/18eS6MHT0w3mYdiKO0cPX5vRTKQIZL3Wm6ki6rt50bqxKLJeVreZHlEONnhdjqyQULxtxY545g7gbgWHRXfn2de8UpzIuxW09hIALizxJIA2Hp4HcCak9HeilXJ9q8X1CvcalcbTKj6Ug55q6wj+qurtpPviyzqSctjDRbmOFHkwEhGFnGANhjur0YMKZD5Um04NoTQfPNLCHwi2LSgrcFqcaY1L13qrSctWI90b4m9s8LiWgSQO3Hpd5QmqbpmkzIVxtSI8x9tXuLgWptZRx4Udzile/39T+tjqOCUodLjMhIxslYQkqTjsCgRV30wzGZ8mzTYxyy/C8ojfJAKicHvHI94oKFJuhTMBxFxbePMNpwA2Ld8YPhPA1HdX5tSS7LlOq43ZLy1YxlSyTXPlnv3rn4jXnRXoQ0DBLaoq+6OmS/ruxoHVOaX+FQV/aqGnDorKIN1uGo38BmzQHpOVDYuFJShPiSo48KFnn2JZ5GNDTM3DetpdtYrR5rZPhxE+m39/8AiivlD3wnf8t78Rorz/8AFoXiTHpZ/cn3ooeTe7HeNDOrT5eSPd1s4sD/AFDY9JI71IGPsNL7iFtrU24lSFpJCkqGCCOo1QW6ZJt0+PPhuqakR3EutLHNKgcg1p+pmYuq7L8N7K0lLhITeYbY3jPfvMfQVjOe37cO66NHNey/c7DfxzQFOdh3Yt4frhkk2um1cDiV4zwkHHbXNFMEOpFzmv3G5SbhKVxvyXVOuK7VKJJ/Wo9FFUAAKBQmq07o31PY7dppMKfcExX23lnhW2shQOCCCkHwqx1FddCX6KGLhdGSpIw28hpwON+B4OX1Tt9u9ZBRSp/I8J0Yxg5wcTW4j8I1s88Q+bIBCt33XdP3VS7FfvLpUghMiLxtkpPzVBQBB68bjlg1ZaFjab90m46jugCcvOhrr15+UZ9ijzoa69eflGfYpNoq+jZP6LfaPwppUfxnaU5edDXXrz8oz7FHnQ1168/KM+xSbRU6Nk/ot9o/CmlR/GdpTl50NdevPyjPsUedDXXrz8oz7FJtFTo2T+i32j8KaVH8Z2lOJ6TNYObSp8eUn6L0Nkj+iRXCtVWO5Ao1DoizSsjBehpMV3xynmaUaKro2VHZYG5dXhRTSYut1c7+KZXdEaZ1CCdHX1caaeVtu2EKWexDg2J7Ad+3FIl9s10sVxXb7vCehyUc0ODmO0HkR3jaramy1ani3C3JsGs467nbOTMjOZMM4wFIVzIH0T/g0WzEve0229x7QyOvI3+ausOJceqd36+XLLqKZteaQl6XlsrS+ida5aeOFOaHoPJ7D2KHWKWaLhRWRmB7DUFYvYWGy7FFFFFaLlSLbClXGexAhMqekyHA20hI3UonArTtSvRdK2X4E2RxKnBhV5mI2Mh4f7f8Cc4x/nMDonYTZLLdtdPoy7FHuK2AjIMlxO6v5U/qaXlqUtalrUVKUcqUTkk9tL6aTHIPZZvdju45Ij+qH5u4fvhmvyiiimCHRRRVki0vHTDt9UeFlM1ERA+mooUtX3AJ/FXLnhuKsAnBVtFb30JWWyuaEamSLTAkyH33C47IjIdVhJwAOIHAAHIdZNd9Juo9MaVimJE0/YZF5dTlto21gpYSRs44OHn1pT18ztjiR9OWpoy0OESQabMTkjdCpCEVzgAsBophiaU1PdbO/qSLa3X4gcUpS0BIUrGSpSEDcpHWUjA37Dh50D0gaekKbt+rbBY2nDsm4ItbPCo9XlUhG38SR2ZHNVMZibMNhdCbbpiAbx87sUPDhBzgHGle9ZLRX1k3ZtOvIQpNhsTrTqcpUiAwpK0nrCgnBB7Qa+cGLAi6a/laeg/EhUqQ1GTnO6ePgTk9pSBnvoLk7luFO2+qW2RU1W0xJug0vrVLlFB2ODRTpBooooqKJr0ZdYUiI9pLUR47LPOEOKO8N75rqezc793dkFD1VY5unNQS7NPSA9GXw8Q5LSd0qHcQQasaaNYtnU/RrEv5wu52JxMKYvPpLjK/ZLPgo8P2k0veNGjh47LzQ56j64H0RDTzsOycRhlrH32rMqKKKYIdalqxAtWiNJ6fbHCowzcZAHNS3jlOe8JGPClKnHpjHktdPwx8mJGjsJ8A0k/wB6WYdsuUxrysS3y5DeccTTKlDPZkCgOTyBKtef/XW91/3REz/aWjVdsuUSiryNo7VskEx9L3t0DnwQHT/81ZWHQGppd7iRrhYbrCiLeSJDzsVaA2jPpHJHPGcDtreJNwIYJc8XeYWbYT3GgCqdR2Rdmh2ZbxV5a4QBMUg/MSpxaUD7UpSr+anvpDtHvF0Q6ftqkcLwl+WkbYPlVtqKs94GE/yirfWlobvXS3p+KWEmIzAS862B6IbQ64eDwOAn7RUjpajzNUaetzVlZcuDrkxTg8kM5ASoE55c/vrz7+UTFiS1o0r1j3DGl+1MBLWGxKZDdVLVi16zpnoziW62qQ/eXXHSAU5RFSVbLVnZSj1J3HWeoHx6ONEStUTTqHUa31wHHFL+MWfKzV5OTxc+DPNXM7gb5KVSZpW+RLMLu5DKoyVqQ8UekWFJVwkOD5u/Xy37dq1PQ3SZb7olqBeBHtkwAIQtICI6wAAAOps46vk7bY2FazzHy8GJEkRVzibRF5GWW7HzXEAiI9rY5oALhqTjdNUabsEiPb59zjW9zgT5FlLa8NoGyccCSEDbAziqHXPR9ZtTpVcIK2YFxcAWmQ2MsyM8isJ7efGnc7khWc15dIWhoep1GW097iuqEhIcUCW3AOSVjmO5Q6uo7Yzuzag1V0eXH3suEZa4meIxHlegoZ+W0sZxnfcZBPMHFJ+T5S2wRZKLSKMQdf5GdfRGTEWy6xGb1NRGpd2XUGrejW6i2z461wyryiobystOA81tLHI/WTtkYUDjFRtCTETel2JcGUrbRIuDjyAo+kkK4iMkdYzWv2G+ad1hCStpuLMDR43IsxhC1sHOMlCgRjl6Q23x3VmumbDdWekhN6FtcTa0XV1Hlm0jgR6SgBgchuPDamUKcZFZHEWHYiWaHVXGnzehnQXMLLDrTa3eSo+lqzCza4mpabCI0s+62AkYASsnIA7AoKT9lLU6HLgyDHmxX4rwSFFt5soUARkHB3wQQR41r/TbCZuunm7vFIcdtckx5BSPkpVjIJ+qoo/8lc9MOl515Ztl0tEB+ZKbbEd9thsqUUY4kKwNzglQJ700TI8qt5qC2JrqCTqIAptHFZx5Q2nluqh2rG6KYTofWgQV/BK+lI5qEB0j/rUJzTuoG/2liuiNs+lEcH9qdtjwnYOG1AljhiFV04dFYTOutw028fib1AejYPIOBJUhXiCDjxpSdacZXwOtrbV2KGDV50dPKj68sa08zOaR9ilBJ/WsZ5luWeB3GmYvG9aS5sxW5pF9753/ABHvwmivrH4Dwf3SfvFFee/lMLwpj0S/vWNdMh8rrp+aPky40d9J7QWkj+1KCXFpGErUB3GmvVivfXRGk9QoyoiF72yD9FbJITnvIJNKVPuTrpZrPD1fbd9kvmf7Se+/bevTyz371z8RqSxcbhxIb93yuAkAp8srGOznUKu2f2yP4hRha04hYglb5r+UixIvGo0uAS1xRb4g5cOVqVt35JV/IKV9QXc23oatcZlfA/PaSwnGx4BlSyP/AFB7l1WdON591agRaGl5bh8S3cHm4vfH2J4fAlVK2prsmfEtEJpRLMCEhruLh9JR/qE/y15rk/k4ugwXvGu16AdX7FM5mZDXva3upvvWj9Feo7HC0tEtcy6x2JanXMNOcQ2J61Y4RnvNGt+jiJPW5MsaW4MzcqjEcLLh+r+7Pd8nl8mlGy6I9/NIM3O3SeC4eUWlbLygG3QDtwq+afHY9or10zrS86Yk+9F7YffiskILLuQ9HH1Cerl6J27MZzUfLOEd8aRidcE2mnX81V2qNiiw1kdt1Lj8+eS70zrS+aSle817jPPxWVcKmXdnWB9Qnq5EA5HZjOa1e4xLXqGytNz4yZMR9pLzXGMLQFpBCknmlWCP0II2qvjvaf1NEZnoZhXJtrASp1kKWydzwqB3TvnY7HmM86XekPXItCXLVaXAq5fJddTyjdw+v/18eS6MHT0w3mYdiKO0cPX5vRTKQIZL3Wm6ki6rt50bqxKLJeVreZHlEONnhdjqyQULxtxY545g7gbgWHRXfn2de8UpzIuxW09hIALizxJIA2Hp4HcCak9HeilXJ9q8X1CvcalcbTKj6Ug55q6wj+qurtpPviyzqSctjDRbmOFHkwEhGFnGANhjur0YMKZD5Um04NoTQfPNLCHwi2LSgrcFqcaY1L13qrSctWI90b4m9s8LiWgSQO3Hpd5QmqbpmkzIVxtSI8x9tXuLgWptZRx4Udzile/39T+tjqOCUodLjMhIxslYQkqTjsCgRV30wzGZ8mzTYxyy/C8ojfJAKicHvHI94oKFJuhTMBxFxbePMNpwA2Ld8YPhPA1HdX5tSS7LlOq43ZLy1YxlSyTXPlnv3rn4jXnRXoQ0DBLaoq+6OmS/ruxoHVOaX+FQV/aqGnDorKIN1uGo38BmzQHpOVDYuFJShPiSo48KFnn2JZ5GNDTM3DetpdtYrR5rZPhxE+m39/8AiivlD3wnf8t78Rorz/8AFoXiTHpZ/cn3ooeTe7HeNDOrT5eSPd1s4sD/AFDY9JI71IGPsNL7iFtrU24lSFpJCkqGCCOo1QW6ZJt0+PPhuqakR3EutLHNKgcg1p+pmYuq7L8N7K0lLhITeYbY3jPfvMfQVjOe37cO66NHNey/c7DfxzQFOdh3Yt4frhkk2um1cDiV4zwkHHbXNFMEOpFzmv3G5SbhKVxvyXVOuK7VKJJ/Wo9FFUAAKBQmq07o31PY7dppMKfcExX23lnhW2shQOCCCkHwqx1FddCX6KGLhdGSpIw28hpwON+B4OX1Tt9u9ZBRSp/I8J0Yxg5wcTW4j8I1s88Q+bIBCt33XdP3VS7FfvLpUghMiLxtkpPzVBQBB68bjlg1ZaFjab90m46jugCcvOhrr15+UZ9ijzoa69eflGfYpNoq+jZP6LfaPwppUfxnaU5edDXXrz8oz7FHnQ1168/KM+xSbRU6Nk/ot9o/CmlR/GdpTl50NdevPyjPsUedDXXrz8oz7FJtFTo2T+i32j8KaVH8Z2lOJ6TNYObSp8eUn6L0Nkj+iRXCtVWO5Ao1DoizSsjBehpMV3xynmaUaKro2VHZYG5dXhRTSYut1c7+KZXdEaZ1CCdHX1caaeVtu2EKWexDg2J7Ad+3FIl9s10sVxXb7vCehyUc0ODmO0HkR3jaramy1ani3C3JsGs467nbOTMjOZMM4wFIVzIH0T/g0WzEve0229x7QyOvI3+ausOJceqd36+XLLqKZteaQl6XlsrS+ida5aeOFOaHoPJ7D2KHWKWaLhRWRmB7DUFYvYWGy7FFFFBaLlf/2Q==";

const LogoIcon = (): JSX.Element => (
  <img
    src={logoImg}
    alt="Signature Sound Studios logo"
    style={{ width: "90px", height: "90px", objectFit: "contain" }}
  />
);

/* ─────────────────────────── component ─────────────────────────── */
export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const [form, setForm]       = useState<LoginForm>({ email: "", password: "" });
  const [errors, setErrors]   = useState<LoginErrors>({});
  const [showPw, setShowPw]   = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validate = (): boolean => {
    const e: LoginErrors = {};
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    if (!form.password) {
      e.password = "Password is required";
    } else if (form.password.length < 6) {
      e.password = "Minimum 6 characters";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Replace setTimeout with your actual auth call e.g. await login(form)
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <style>{css}</style>
      <div className="login-page">
        <div className="login-box">

          {/* Logo */}
          <div className="login-logo">
            <LogoIcon />
            <div className="logo-text-block">
              <span className="logo-brand">Signature</span>
              <span className="logo-brand">Sound</span>
              <span className="logo-brand">Studios</span>
            </div>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit} noValidate>

            {/* Email */}
            <div className="field-group">
              <label className="field-label" htmlFor="email">Email</label>
              <div className="field-input-wrap">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`field-input${errors.email ? " error" : ""}`}
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="field-group">
              <label className="field-label" htmlFor="password">Password</label>
              <div className="field-input-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPw ? "text" : "password"}
                  className={`field-input pw-field${errors.password ? " error" : ""}`}
                  placeholder="••••••••••"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="pw-toggle"
                  onClick={() => setShowPw(p => !p)}
                  tabIndex={-1}
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            {/* Submit */}
            <div className="login-btn-row">
              <button type="submit" className="btn-login" disabled={loading}>
                {loading && <span className="spinner" />}
                {loading ? "Verifying..." : "Login"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}                                                                                                                                                                                                                                                                             
import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const serviceAccount = JSON.parse(
   '{ "type": "service_account", "project_id": "payment-47eae", "private_key_id": "2aa8c19e0f82c42a7719bb439b9e9c319e0064e6", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDSjk5ktLUWx3k5\nTPOThLaxbktMSKDj+qPVByYoktObDLiLamZRConvT80NGna/BJniBUYEWsvEOp4e\nVeUaNH6VOmgNwoNDwRgXlLj22sJ3IQS04ZKTE6jtYQ+PuqL4MBFq/ChaJZg2WyW0\nywbcyO+B1aUj4XQ6lDHrxAr4z9UnF9zU+EljJDXQZcuMhxaCfOX+35XdrI1AlYVy\nPwRkv3chP0Y/MV2kV08OmtCzE2suAy3OvRRlTGZbUVhvND/diM/TTSM7HM9d0xU3\nuWFbtu0GaK+D8scXW0m3tpMXpBzyZt7cY/Upo/NDS5Faz+h2hNLVpgKqREF4XSMN\nBIslmPlzAgMBAAECggEAC2Ga1jG4aitNH65LqkktsOiT1GNGoxwct/qjcuUA4Cwv\nW4XcUvwdWZy4KkGoconWoZOEZd7cjdZXTq9461I0F2/pSPkfLE3nNfsZhmprwZG8\n1eQtjpqs8mvhMfU2MvEyN9S6f6jxkdqabqvcypln7N42B3r70+DH1AUsTKe7T1oP\nOmYSDvwkvssR/rEwDKI5lb0lDyp+77Ie14NmN2+R5Ltz+ltADHcJnOlMAQ6mwrNC\n43du0dt0QTUK4/jjV+Pn1DG62KwR3+L55d7M3LdVblpszQVYSymHY9dSFpx8YRws\nsJ0uggLCaMViaD0YxgcoeM7O+lbJtFT2ZwNW7A9hlQKBgQDznOfLUK0BXhJFhfOd\noguMZfuhekR7UWqapGbef3hnxUTPLK7eQ+Le4u25ryKqdgFU++1votXwh2yyLpfP\n9Yy7Vr1Grk7DfB34zdshliZGYcfdesMBKVC4J+0v2B4bkJz0VwOW5+6XXUU840U7\nb0itLn6HjCKQ55zIhXOexuEy7wKBgQDdQxl02rLFYRqzwC0pwlMOFSJVkBAB4KNh\nfYED+px9bwgJK6RAmUkJhXjroW54t5JxijKEneBt5yqhoFewosXK/ElmXfukeR05\njC4MpI/PK6FZ704aFRPQliF798Iz/zcD3YNod+NclTX535qASXiY2Kv+s8YgWe0R\nptbqwFORvQKBgQCaALjv6MJVuPhoBvQo1IXkbZwTSs37/04bEI8PXRnqz+Rd6+to\nCxZivKZ32eVaSVsyNEi3aANDGPl38sh56Mrcq0rgYdTc85um68v5gYgUuj+1HaQl\nGc8ze9oPgtoVpufx9wgH3/sOqSHaCfp8Ri91e4z1d3tqi2CryuF6oFNA9QKBgQCa\nW20u8EM3H38ZV0Aqmb6HXIcPWelQ5f4UzRFsTTFO8F6SxzdXOZiSY+LvvzbqUGaB\nfv+vNNSU12gOSWXjfCqwaUBrgbVEEJoqw3h8qXEJ/k4aB7Bc0cd5BMNnUHjS/YDL\n2YULJFghBpcZMrz+MkNHniCfF5tohlO0tMfKDVI/oQKBgQDNR0JH+WDQfoqUzOOM\nuW2SxVEh4qowZPONjoGxD2PbuGyGn+ZVlgFV0rpF7rYVjm7AwTxSqqA05RVeafMl\n8SsFvwjEzwnxh3ATQusIIEmap0WEToZlm24LsLBRFCOUevB3EN4ANfAnoIaXoMOh\nwcnTP/P2CZqgE+Xxo4GrRRxeTg==\n-----END PRIVATE KEY-----\n", "client_email": "firebase-adminsdk-dh8ur@payment-47eae.iam.gserviceaccount.com", "client_id": "116830897218173941769", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dh8ur%40payment-47eae.iam.gserviceaccount.com" }' as string
);

if(!getApps().length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const adminDb = admin.firestore();

export { adminDb };
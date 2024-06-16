export const shortenEmail = (email) => {
    const [localPart, domainPart] = email.split('@');
    const shortenedLocalPart = localPart.charAt(0) + '*'.repeat(localPart.length - 4);
    return `${shortenedLocalPart}@${domainPart}`;
};



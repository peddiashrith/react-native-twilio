export const Decode = (Data) => {
    return Buffer.from(Data).toString('base64');
};

export const Encode = (Data) => {
    return Buffer.from(Data, 'base64').toString();
};

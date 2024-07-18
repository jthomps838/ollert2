async function loadSwagger() {
    const swagger = await import('../swagger.json', {
        assert: { type: 'json' },
    });
    return swagger.default;
}

export default loadSwagger;

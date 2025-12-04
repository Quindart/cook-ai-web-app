export const imageDetectionAPI = {
  endpoint: 'POST /api/v1/images',
  requestExample: {
    image: 'base64_encoded_image_string',
    userId: 'user_123',
  },
  responseExample: {
    success: true,
    imageId: 'img_456',
    uploadUrl: 'https://storage.example.com/img_456.jpg',
    confidence: 0.92,
    detectedAt: '2024-01-15T10:30:00Z',
  },
}

// Ingredient Detection API
export const ingredientDetectionAPI = {
  endpoint: 'POST /api/v1/detect',
  requestExample: {
    imageId: 'img_456',
    userId: 'user_123',
    languages: ['en', 'vi'],
  },
  responseExample: {
    success: true,
    detectionId: 'det_789',
    ingredients: [
      {
        name: 'Tomato',
        confidence: 0.95,
        icon: '🍅',
        aliases: ['cà chua', 'tomato'],
      },
      {
        name: 'Onion',
        confidence: 0.88,
        icon: '🧅',
        aliases: ['hành tây', 'onion'],
      },
      {
        name: 'Garlic',
        confidence: 0.85,
        icon: '🧄',
        aliases: ['tỏi', 'garlic'],
      },
    ],
    processingTime: 1.23,
  },
}

export const recipeSearchAPI = {
  endpoint: 'POST /api/v1/recipes/search',
  requestExample: {
    ingredients: ['Tomato', 'Onion', 'Garlic'],
    filters: {
      maxTime: 30,
      cuisine: 'Vietnamese',
      difficulty: 'Easy',
      servings: 4,
    },
    language: 'vi',
  },
  responseExample: {
    success: true,
    recipes: [
      {
        id: 'recipe_1',
        name: 'Vietnamese Tomato Soup',
        matchScore: 0.94,
        ingredientMatch: [
          {
            ingredient: 'Tomato',
            available: true,
          },
          {
            ingredient: 'Onion',
            available: true,
          },
          {
            ingredient: 'Garlic',
            available: true,
          },
          {
            ingredient: 'Tomato Paste',
            available: false,
          },
        ],
        missingIngredients: ['Tomato Paste'],
        time: '20 min',
        difficulty: 'Easy',
        servings: 4,
        rating: 4.8,
        instructions: [
          'Cut tomatoes and onions into small pieces',
          'Sauté garlic and onion in olive oil',
          'Add tomato and broth, cook for 10 minutes',
          'Season and add fresh herbs',
          'Serve hot',
        ],
      },
    ],
    totalResults: 12,
  },
}

export const chatAssistantAPI = {
  endpoint: 'POST /api/v1/chat',
  requestExample: {
    message: 'Can I substitute tomato paste with tomato sauce?',
    context: {
      currentRecipe: 'recipe_1',
      userId: 'user_123',
    },
    language: 'en',
  },
  responseExample: {
    success: true,
    messageId: 'msg_999',
    response:
      'Yes, you can substitute tomato paste with tomato sauce. Use about 3 tablespoons of tomato sauce for 1 tablespoon of paste. You may need to simmer longer to reduce excess liquid.',
    suggestions: [
      'Use a 3:1 ratio of sauce to paste',
      'Simmer 5-10 minutes longer',
      'Add a pinch of sugar to balance',
    ],
  },
}

// Shopping List Export API
export const shoppingListAPI = {
  endpoint: 'POST /api/v1/shopping-list/export',
  requestExample: {
    recipeIds: ['recipe_1', 'recipe_2'],
    userId: 'user_123',
    format: 'csv', // or "json", "pdf"
  },
  responseExample: {
    success: true,
    downloadUrl: 'https://storage.example.com/shopping-list_xyz.csv',
    itemCount: 15,
    generatedAt: '2024-01-15T10:35:00Z',
  },
}
export const savedRecipesAPI = {
  endpoint: 'POST /api/v1/recipes/save',
  requestExample: {
    recipeId: 'recipe_1',
    userId: 'user_123',
    tags: ['quick', 'vietnamese'],
  },
  responseExample: {
    success: true,
    savedRecipeId: 'saved_123',
    recipe: {
      id: 'recipe_1',
      name: 'Vietnamese Tomato Soup',
      savedAt: '2024-01-15T10:36:00Z',
    },
  },
}
